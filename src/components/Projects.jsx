import Next from "../assets/Next.js.svg";
import NODE from "../assets/Node.svg";
import { motion, AnimatePresence } from "framer-motion";
import { Data } from "../context/Store";
import { useContext } from "react";

const ProjectsArray = [
  {
    name: "E-commerce Platform",
    icon: NODE,
    tech_stack: [
      "React",
      "TypeScript",
      "Node.js",
      "Express.js",
      "MySQL",
      "Prisma",
      "JWT",
      "Cloudinary"
    ],
    bg: "bg-green-100",
    catagory: ["Node.JS"]
  },

  {
    name: "Blog CMS & Publishing Platform",
    icon: NODE,
    tech_stack: [
      "React",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MySQL",
      "Cloudinary",
      "JWT"
    ],
    bg: "bg-green-100",
    catagory: ["Node.JS"]
  },

  {
    name: "Business Management & CMS",
    icon: Next,
    tech_stack: [
      "Next.js",
      "TypeScript",
      "React",
      "Node.js",
      "MySQL",
      "Prisma",
      "Cloudinary"
    ],
    bg: "bg-gray-100",
    catagory: ["Next.JS", "Node.JS"]
  },

  {
    name: "Appointment Booking System",
    icon: NODE,
    tech_stack: [
      "React",
      "TypeScript",
      "Node.js",
      "Express.js",
      "MySQL",
      "Prisma",
      "JWT",
      "Zod"
    ],
    bg: "bg-green-100",
    catagory: ["Node.JS"]
  },

  {
    name: "Real-Time Chat & Collaboration App",
    icon: NODE,
    tech_stack: [
      "React",
      "TypeScript",
      "Node.js",
      "Express.js",
      "Socket.IO",
      "MongoDB",
      "Mongoose",
      "Redis"
    ],
    bg: "bg-green-100",
    catagory: ["Node.JS"]
  },

  {
    name: "AI-Powered Productivity Assistant",
    icon: Next,
    tech_stack: [
      "Next.js",
      "TypeScript",
      "React",
      "Node.js",
      "OpenAI API",
      "MongoDB",
      "Mongoose"
    ],
    bg: "bg-gray-100",
    catagory: ["Next.JS"]
  }
];

export const Projects = ({ activeMenu }) => {
  // const {btnColor} = useContext(Data)
  return (
  <motion.ul className="grid grid-cols-1 md:grid-cols-3 md:px-10 w-full gap-4">
  <AnimatePresence>
    {ProjectsArray.filter(
      (item) =>
        activeMenu === "All" ||
        item.catagory[0] === activeMenu ||
        item.catagory[1] === activeMenu
    ).map((ele, index) => {
      return (
        <motion.li
          key={ele.name + index}
          layout
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.3 }}
          className="w-full"
        >
          <div className="flex flex-col h-full py-2 px-2 rounded shadow-md gap-5">
            <div className="flex items-center gap-4">
              <div className={`p-2 ${ele.bg} rounded-xl shrink-0`}>
                <img src={ele.icon} alt="icon" className="w-8" />
              </div>
              <div className="flex">
                <h3 className="herotext_color text-[19px] font-medium">
                  {ele.name}
                </h3>
              </div>
            </div>
            <ul className="flex items-center gap-1 flex-wrap">
              {ele.tech_stack.map((item, i) => (
                <li
                  className="px-2 py-1 rounded bg-blue-50 cursor-pointer text text-[15px]"
                  key={i}
                  // style={{ backgroundColor: btnColor }}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </motion.li>
      );
    })}
  </AnimatePresence>
</motion.ul>
  );
};
