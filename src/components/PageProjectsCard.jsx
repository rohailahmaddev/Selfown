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
    bg: "bg-blue-100",
    catagory: [".NET", "C#"],
  },
  {
    name: "Production support system",
    icon: Net,
    tech_stack: [".NET", "C#", "SQL Server"],
    bg: "bg-blue-100",
    catagory: [".NET", "C#"],
  },
  {
    name: "Production SaaS / enterprise app",
    icon: ASPNET,
    tech_stack: ["C#", "React", "Typescript", "SQL Server"],
    bg: "bg-black/10",
    catagory: [".NET", "C#"],
  },
  {
    name: "Full JavaScript full-stack product",
    icon: Next,
    tech_stack: ["Next.JS", "React", "Node.JS", "Typescript"],
    bg: "bg-gray-100",
    catagory: ["Next.JS"],
  },
  {
    name: "Enterprise insurance system",
    icon: Net,
    tech_stack: [".NET", "React", "i18next", "Angular", "Typescript"],
    bg: "bg-blue-100",
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
    bg: "bg-blue-100",
    catagory: [".NET"],
  },
  {
    name: "Government-compliant invoicing system",
    icon: Net,
    tech_stack: [".NET", "C#", "XML / UBL 2.1", "Peppol BIS 3.0", "REST APIs"],
    bg: "bg-blue-100",
    catagory: [".NET", "C#"],
  },
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
                        className="px-3 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-100 hover:bg-blue-100 cursor-pointer text-[13px] font-medium transition-colors"
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