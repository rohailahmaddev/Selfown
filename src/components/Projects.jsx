import Net from "../assets/.NET.svg";
import Next from "../assets/Next.js.svg";
import ASPNET from "../assets/aspnet.svg";
import C from "../assets/C.svg";
import { motion, AnimatePresence } from "framer-motion";

const ProjectsArray = [
  {
    name: "Analytics workforce performance system",
    icon: Net,
    tech_stack: [".NET", "C#", "React", "SQL Server"],
    bg: "bg-blue-200",
    catagory: [".NET","C#"],
  },
  {
    name: "Production support system",
    icon: Net,
    tech_stack: [".NET", "C#", "SQL Server"],
    bg: "bg-blue-200",
    catagory: [".NET","C#"],
  },
  {
    name: "Production SaaS / enterprise app",
    icon: ASPNET,
    tech_stack: ["C#", "React", "Typescript","SQL Server"],
    bg: "bg-black/10",
    catagory: [".NET","C#"],
  },
  {
    name: "Full JavaScript full-stack product",
    icon: Next,
    tech_stack: ["Next.JS", "React", "Node.JS","Typescript"],
    bg: "bg-gray-200",
    catagory: ["Next.JS"],
  },
  {
    name: "Enterprise insurance system",
    icon: Net,
    tech_stack: [".NET", "React", "i18next", "Angular","Typescript"],
    bg: "bg-blue-200",
    catagory: [".NET"],
  },
  {
    name: "Mobile modernization project",
    icon: C,
    tech_stack: [".NET MAUI", "C#", "Camera API", "Xamarin.Froms"],
    bg: "bg-red-100",
    catagory: ["C#"],
  },
  {
    name: "Event-driven cloud architecture",
    icon: C,
    tech_stack: ["Azure", "AWS S3", "SNS/SQS", "Serverless Architecture"],
    bg: "bg-red-100",
    catagory: ["C#"],
  },
  {
    name: "AI + event-driven analytics system",
    icon: Net,
    tech_stack: [".NET", "Python", "React", "Kinaxis API"],
    bg: "bg-blue-200",
    catagory: [".NET"],
  },
  {
    name: "Government-compliant invoicing system",
    icon: Net,
    tech_stack: [".NET", "C#","XML / UBL 2.1", "Peppol BIS 3.0","REST APIs"],
    bg: "bg-blue-200",
    catagory: [".NET","C#"],
  },
];

export const Projects = ({ activeMenu }) => {
  return (
    <motion.ul className="flex items-center justify-center w-full gap-10 flex-wrap">
      <AnimatePresence>
        {ProjectsArray.filter(
          (item) => activeMenu === "All" ||item.catagory[0] === activeMenu || item.catagory[1]=== activeMenu
        ).map((ele, index) => {
          return (
            <motion.li
              key={ele.name + index}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3 }}
              className=""
            >
              <div className="flex flex-col py-5 px-5 rounded shadow-md gap-5 ">
                <div className="flex items-center gap-4">
                  <div className={`p-2 ${ele.bg} rounded-xl`}>
                    <img src={ele.icon} alt="icon" className="w-10" />
                  </div>
                  <div className="flex">
                    <h3 className="herotext_color text-xl font-medium md:w-[80%]">
                      {ele.name}
                    </h3>
                    {/* <span className="text flex items-center gap-2">
                      Mannat-Themes{" "}
                      <FaArrowUpRightFromSquare className="cursor-pointer" />
                    </span> */}
                  </div>
                </div>
                <ul className="flex items-center justify-center gap-3 flex-wrap">
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
