import { HiMiniCodeBracket } from "react-icons/hi2";
import { TfiWorld } from "react-icons/tfi";
import { FaDesktop } from "react-icons/fa";
import { MdSmartphone } from "react-icons/md";
import { IoServer } from "react-icons/io5";
import { FiLayout } from "react-icons/fi";
import { SerEdu } from "./SerEdu";

export const ServicesCard = ({ display = true, bg = "gradient_bg" }) => {
  const cards = [
    {
      bg: "bg-red-100",
      text:"text-red-500",
      icon: <HiMiniCodeBracket />,
      name: "Custom Software",
      discription:
        "Building scalable custom software solutions using .NET and .NET Core for modern business needs.",
    },
    {
      bg: "bg-blue-100",
      text:"text-blue-500",
      icon: <FaDesktop />,
      name: "Desktop Applications",
      discription:
        "Developing powerful desktop applications with WinForms, WPF, and .NET MAUI.",
    },
    {
      bg: "bg-green-100",
      text:"text-green-500",
      icon: <TfiWorld />,
      name: "Web Development",
      discription:
        "Creating responsive web applications using ASP.NET Core, MVC, Razor Pages, and Blazor.",
    },
    {
      bg: "bg-red-100",
      text:"text-red-500",
      icon: <MdSmartphone />,
      name: "Mobile Apps",
      discription:
        "Cross-platform mobile app development with Xamarin and .NET MAUI for Android and iOS.",
    },
    {
      bg: "bg-blue-100",
      text:"text-blue-500",
      icon: <IoServer />,
      name: "API & Backend",
      discription:
        "RESTful API development, cloud integration, and backend services with Node.js and Next.js.",
    },
    {
      bg: "bg-green-100",
      text:"text-green-500",
      icon: <FiLayout />,
      name: "Frontend Solutions",
      discription:
        "Modern frontend development using React, Next.js, Angular, TypeScript, Bootstrap, and Kendo UI.",
    },
  ];
  const array = display ? cards.slice(0, 3) : cards;
  return (
    <section
      className={`container flex items-center justify-center ${bg} ${display ? "pt-25" : "pt-0"}`}
    >
      <div className="w-[90%] flex items-center justify-center flex-col ">
        {display && (
          <SerEdu
            btn_text={"SERVICES"}
            heading={"My Services"}
            para={
              "Build scalable full stack web applications with modern frontend, backend, and API solutions for fast and seamless digital experiences."}
          />
        )}{" "}
        <div className="pt-25">
          <ul
            className={`${display ? "grid grid-col-1 md:grid-cols-3" : "grid grid-cols-3 grid-rows-2"} items-center bg-transparent gap-5`}
          >
            {array.map((ele, index) => {
              return (
                <li key={index} className="">
                  <div className="shadow-md flex flex-col gap-5 p-6 bg-white pb-15">
                    <div className={`${ele.bg} rounded ${ele.text} p-3 w-13 h-13 flex justify-center items-center text-2xl`}>
                      {ele.icon}
                    </div>
                    <h2 className="text-2xl herotext_color font-medium">
                      {ele.name}
                    </h2>
                    <p className="herotext_color h-20">{ele.discription}</p>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
};
