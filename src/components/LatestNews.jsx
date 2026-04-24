import card1Image from "../assets/1.jpg";
import card2Image from "../assets/2.jpg";
import card3Image from "../assets/3.jpg";
import card4Image from "../assets/4.jpg";
import card5Image from "../assets/5.jpg";
import card6Image from "../assets/6.jpg";

import userImage from "../assets/user-7.jpg";
import { IoIosArrowRoundForward } from "react-icons/io";
import { SerEdu } from "./SerEdu";

const card = [
  {
    image: card1Image,
    heading: "Change the world with small things",
    userimage: userImage,
    username: "Charles Woodall",
    date: "14 feb 2020",
  },
  {
    image: card2Image,
    heading: "With a clean, minimal and professional look",
    userimage: userImage,
    username: "Charles Woodall",
    date: "14 feb 2020",
  },
  {
    image: card3Image,
    heading: "With a clean, minimal and professional look",
    userimage: userImage,
    username: "Charles Woodall",
    date: "14 feb 2020",
  },
  {
    image: card4Image,
    heading: "Change the world with small things",
    userimage: userImage,
    username: "Charles Woodall",
    date: "14 feb 2020",
  },
  {
    image: card5Image,
    heading: "With a clean, minimal and professional look",
    userimage: userImage,
    username: "Charles Woodall",
    date: "14 feb 2020",
  },
  {
    image: card6Image,
    heading: "With a clean, minimal and professional look",
    userimage: userImage,
    username: "Charles Woodall",
    date: "14 feb 2020",
  },
];

export const LatestNews = ({ display = true }) => {
  const array = display ? card.slice(0, 3) : card;
  return (
    <section className="container flex items-center justify-center pb-25">
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
          className={`${display ? "flex justify-between" : "grid grid-cols-3 grid-rows-2"} gap-10 w-full items-center pt-20`}
        >
          {array.map((ele, index) => {
            return (
              <li
                key={index}
                className="rounded flex flex-col gap-5 shadow-md pb-5"
              >
                <img src={ele.image} alt="image" className="rounded-t " />
                <div className="px-5">
                  <h2 className="text-2xl border-b border-dashed border-blue-100 h-25 ">
                    {ele.heading}
                  </h2>
                </div>
                <div className="flex items-center justify-between px-5">
                  <div className="flex items-center gap-3">
                    <img
                      src={ele.userimage}
                      alt="user-image"
                      className="w-11 h-11 rounded-full"
                    />
                    <div className="flex flex-col">
                      <h4 className="text-[15px]">{ele.username}</h4>
                      <h4 className="text-[15px]">{ele.date}</h4>
                    </div>
                  </div>
                  <button className="flex items-center cursor-pointer text-[15px]">
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
