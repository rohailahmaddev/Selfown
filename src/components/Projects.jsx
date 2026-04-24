import react from "../assets/React.svg";
import mongo from "../assets/Mongodb.svg";
import vue from "../assets/Vue.svg";
import bootstrap from "../assets/Bootstrap.svg";
import angular from "../assets/Angular.svg";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { motion, AnimatePresence } from "framer-motion";

const ProjectsArray = [
  {
    name: "Auto Driver Project",
    icon: react,
    tech_stack: ["React", "Javascript"],
    bg: "bg-blue-100",
    catagory: "Mongodb",
  },
  {
    name: "Auto Driver Project",
    icon: vue,
    tech_stack: ["Vue", "Javascript"],
    bg: "bg-blue-100",
    catagory: "Bootstrap",
  },
  {
    name: "Auto Driver Project",
    icon: mongo,
    tech_stack: ["Mongodb", "Javascript"],
    bg: "bg-blue-100",
    catagory: "Mongodb",
  },
  {
    name: "Auto Driver Project",
    icon: bootstrap,
    tech_stack: ["Bootstrap", "CSS", "Javascript"],
    bg: "bg-blue-100",
    catagory: "Bootstrap",
  },
  {
    name: "Auto Driver Project",
    icon: angular,
    tech_stack: ["Angular", "React", "JQuery"],
    bg: "bg-red-100",
    catagory: "Angular",
  },
];

export const Projects = ({ activeMenu }) => {
  return (
    <motion.ul className="flex items-center w-full gap-10 flex-wrap">
      <AnimatePresence>
        {ProjectsArray.filter(
          (item) => activeMenu === "All" || item.catagory === activeMenu,
        ).map((ele, index) => {
          return (
            <motion.li
              key={ele.name + index}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex flex-col py-5 px-5 rounded shadow-md gap-5">
                <div className="flex items-center justify-between gap-5">
                  <div className={`p-2 ${ele.bg} rounded-xl`}>
                    <img src={ele.icon} alt="icon" className="w-10" />
                  </div>
                  <div className="flex flex-col">
                    <h3 className="herotext_color text-2xl font-medium">
                      {ele.name}
                    </h3>
                    <span className="text flex items-center gap-2">
                      Mannat-Themes{" "}
                      <FaArrowUpRightFromSquare className="cursor-pointer" />
                    </span>
                  </div>
                </div>
                <ul className="flex items-center justify-start gap-3">
                  {ele.tech_stack.map((item, i) => {
                    return (
                      <li
                        className="px-2 py-1 rounded bg-blue-100 coursor-pointer text"
                        key={i}
                      >
                        {item}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </motion.li>
          );
        })}
      </AnimatePresence>
    </motion.ul>
  );
};
