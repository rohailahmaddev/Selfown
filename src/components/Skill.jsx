import react from "../assets/React.svg";
import node from "../assets/Node.svg";
import Next from "../assets/Next.js.svg";
import mysql from "../assets/mysql.svg";
import typescript from "../assets/typescript.svg";
import express from "../assets/express.svg";
import tailwind from "../assets/tailwind.svg";
import prisma from "../assets/prisma.svg";
import mongodb from "../assets/mongodb.svg";
import redux from "../assets/redux.svg";
import cpp from "../assets/cplusplus.svg";


const skills = [
  {
    skill: "React",
    experience: "Strong",
    icon: react,
  },
  {
    skill: "Node.js",
    experience: "Strong",
    icon: node,
  },
  {
    skill: "TypeScript",
    experience: "Strong",
    icon: typescript,
  },
  {
    skill: "Next.js",
    experience: "Intermediate",
    icon: Next,
  },
  {
    skill: "Express.js",
    experience: "Strong",
    icon: express,
  },
  {
    skill: "MySQL",
    experience: "Strong",
    icon: mysql,
  },
  {
    skill: "MongoDB",
    experience: "Intermediate",
    icon: mongodb,
  },
  {
    skill: "Prisma",
    experience: "Intermediate",
    icon: prisma,
  },
  {
    skill: "Tailwind CSS",
    experience: "Strong",
    icon: tailwind,
  },
  {
    skill: "Redux Toolkit",
    experience: "Intermediate",
    icon: redux,
  },
  {
    skill: "C++",
    experience: "Intermediate",
    icon: cpp,
  },
];

export const Skill = () => {
  return (
    <section className="container flex items-center justify-center">
      <div className="w-[90%] flex items-center justify-center pt-25 pb-25">
        <ul className=" flex items-center justify-center flex-wrap gap-12 md:gap-9">
          {skills.map((ele, index) => {
            return (
              <li key={index}>
                <div className="flex items-center justify-between p-2 rounded shadow-md gap-5">
                  <img src={ele.icon} alt="icon" className="w-8" />
                  <div className="flex flex-col">
                    <h3 className="herotext_color text-[20px] font-medium w-31">
                      {ele.skill}
                    </h3>
                    <span className="text-gray-500 w-39 md:w-32 md:text-[14px]">{ele.experience}</span>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};
