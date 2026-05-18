import { IoIosArrowRoundForward } from "react-icons/io";
import { SerEdu } from "./SerEdu";
import { useContext, useEffect, useState } from "react"
import { ApiFetch } from "../api/GetBlogs";
import { useNavigate } from "react-router-dom";
import { Data } from "../context/Store";
import Avatar from "./Avatar"
import { Loader } from "./Loader";


export const LatestNews = ({ display = true, heroRef }) => {

  const [blogs,setBlogs] = useState([])
  const {loading,setLoading} = useContext(Data)
  const navigate = useNavigate();

useEffect(()=>{
    const getBlogs = async ()=>{
        setLoading(true)
        try {
            const res = await ApiFetch()
            setBlogs(res.data)
        } catch (error) {
            console.log(error)
        }
        finally{
            setLoading(false)
        }
    }
    getBlogs()
},[setLoading])


const goToHero = () => {
  heroRef.current.scrollIntoView({ behavior: "smooth" });
};

const array = display ? blogs.slice(0, 3) : blogs;

if(loading) return <Loader/>


  return (
    <section className="container flex items-center justify-center md:pb-25">
      <div className="w-[85%] flex flex-col items-center">
        {display && (
          <SerEdu
            btn_text={"BLOGS"}
            heading={"Latest news & insights"}
            para={
              "We craft digital, graphic and dimensional thinking, to create category leading brand experiences that have meaning ."
            }
          />
        )}
        <ul
          className={`${display ? "md:grid-cols-3" : "md:grid-cols-3 md:grid-rows-1"} grid grid-col-1 gap-10 w-full items-center pt-20`}
        >
          {array.map((ele, index) => {
            return (
              <li
                key={index}
                className="rounded flex flex-col gap-5 shadow-md pb-5 cursor-pointer"
                onClick={()=>navigate(`/blogs/${ele.id}`)}
                >
                <img src={ele.image} alt="image" className="rounded-t " />
                <div className="px-5 border-b border-dashed border-blue-100">
                  <h2 className="text-2xl h-14 ">
                    {ele.title}
                  </h2>
                  <p className="pt-4 pb-4">
                    {ele.body.split(" ").slice(0, 10).join(" ")}...
                  </p>
                </div>
                <div className="flex items-center justify-between px-5">
                  <div className="flex items-center gap-3">
                      <Avatar name={ele.author_name}/>
                    <div className="flex flex-col">
                      <h4 className="text-[15px]">{ele.author_name}</h4>
                      <h4 className="text-[15px]">{ele.created_at.substring(0,10)}</h4>
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
