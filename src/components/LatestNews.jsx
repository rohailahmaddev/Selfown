import { IoIosArrowRoundForward } from "react-icons/io";
import { SerEdu } from "./SerEdu";
import { useContext, useEffect, useState } from "react"
import { ApiFetch } from "../api/GetBlogs";
import { useNavigate } from "react-router-dom";
import { Data } from "../context/Store";
import Avatar from "./Avatar"
import { Loader } from "./Loader";


export const LatestNews = ({ display = true, heroRef }) => {

  const [blogs, setBlogs] = useState([])
  const { loading, setLoading } = useContext(Data)
  const navigate = useNavigate();

  useEffect(() => {
    const getBlogs = async () => {
      setLoading(true)
      try {
        const res = await ApiFetch()
        setBlogs(res.data)
      } catch (error) {
        console.log(error)
      }
      finally {
        setLoading(false)
      }
    }
    getBlogs()
  }, [setLoading])


  const goToHero = () => {
    heroRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const array = display ? blogs.slice(0, 3) : blogs;

  if (loading) return <Loader />


  return (
    <section className="container flex items-center justify-center md:pb-25">
      <div className="w-[90%] flex flex-col items-center">
        {display && (
          <SerEdu
            btn_text={"BLOGS"}
            heading={"Latest news & insights"}
            para={
              "AI-driven digital design creating adaptive, meaningful brand experiences across platforms."
            }
          />
        )}
        <ul
          className={`${display ? "md:grid-cols-3" : "md:grid-cols-3 md:grid-rows-1"} grid grid-col-1 gap-5 w-full justify-center items-center pt-20`}
        >
          {array.map((ele, index) => {
            const formattedDate = ele?.created_at
              ? new Date(ele.created_at).toLocaleDateString("en-GB", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })
              : "No date";
            return (
              <li
                key={index}
                className="rounded flex flex-col gap-5  shadow-md pb-5 cursor-pointer"
                onClick={() => navigate(`/blogs/${ele.id}`)}
              >
                <img src={ele.image_url} alt="image" className="rounded-t " />
                <div className="mx-5 border-b border-dashed border-blue-100">
                  <h2 className="text-xl font-medium h-20 ">
                    {ele.title}
                  </h2>
                </div>
                <div className="flex items-center justify-between px-5">
                  <div className="flex items-center gap-3">
                    <Avatar name={ele.author_name} />
                    <div className="flex flex-col ">
                      <h4 className="text-[15px]">{ele.author_name}</h4>
                      <h4 className="text-[15px] text-gray-500">{formattedDate}</h4>
                    </div>
                  </div>
                  <button onClick={goToHero} className="flex items-center cursor-pointer text-[15px]">
                    Read more{" "}
                    <IoIosArrowRoundForward className="pt-1 text-[20px]" />
                  </button>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};
