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
              <div className="flex flex-col h-full rounded shadow-md gap-5">
                <div className="flex flex-col items-center gap-6 pb-3">
                  <div className={`w-full h-40 ${ele.bg} rounded shrink-0 flex items-center justify-center`}>
                    <img src={ele.icon} alt="icon" className="w-15" />
                  </div>
                  <div className="w-full flex items-center justify-start px-10 h-20 py-5">
                    <h3 className="herotext_color text-[19px] text-left font-medium">
                      {ele.name}
                    </h3>
                  </div>
                </div>
              </div>
            </motion.li>
          );
        })}
      </AnimatePresence>
    </motion.ul>
  );
};