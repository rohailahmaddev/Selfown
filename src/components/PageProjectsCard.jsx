// import Net from "../assets/.NET.svg";
import Next from "../assets/Next.js.svg";
import NODE from "../assets/Node.svg";
// import ASPNET from "../assets/aspnet.svg";
// import C from "../assets/C.svg";
import { motion, AnimatePresence } from "framer-motion";

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
      "MySQL",
      "Prisma",
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
      "MySQL",
      "Prisma"
  ],
  bg: "bg-gray-100",
  catagory: ["Next.JS"]
}
];

export const PageProjectsCard = ({ activeMenu }) => {
  return (
    <motion.ul className="grid grid-cols-1 md:grid-cols-3 md:px-10 w-full gap-6">
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
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3 }}
              whileHover={{ y: -8 }}
              className="w-full"
            >
              <div className="flex flex-col h-full rounded-2xl shadow-md hover:shadow-2xl transition-shadow duration-300 overflow-hidden bg-white border border-gray-100">
                <div
                  className={`w-full h-44 ${ele.bg} flex items-center justify-center group`}
                >
                  <motion.img
                    src={ele.icon}
                    alt="icon"
                    className="w-16 drop-shadow-md"
                    whileHover={{ scale: 1.15, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  />
                </div>

                <div className="flex flex-col gap-4 p-5">
                  <h3 className="herotext_color text-lg font-semibold leading-snug">
                    {ele.name}
                  </h3>

                  <ul className="flex items-center gap-2 flex-wrap">
                    {ele.tech_stack.map((item, i) => (
                      <li
                        className="px-3 py-1 rounded-full bg-blue-50 text border border-blue-100 hover:bg-blue-100 cursor-pointer text-[13px] font-medium transition-colors"
                        key={i}
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.li>
          );
        })}
      </AnimatePresence>
    </motion.ul>
  );
};