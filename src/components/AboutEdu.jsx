import ExperienceCard from "./Eductaions";
import { MobileEducation } from "./MobileEducation";
import { FaUniversity } from "react-icons/fa";
import { CgOrganisation } from "react-icons/cg";
import { SerEdu } from "./SerEdu";

const educationData = [
{
  date: "2023 - 2027",
  border: "border-green-200",
  left: "0px",
  right: "-84px",
  pb: "30px",
  pt: "30px",
  f_color: "#4def6a",
  s_color: "#d9fce1",
  class_w: "timeline-education",
  rotate: "rotate-180",
  icon: <FaUniversity className="text-green-400 text-4xl" />,
  iconBg: "bg-green-100",
  circleBg: "bg-green-400",
  institute: "BS Computer Science — Final Year",
  duties: "University of the Punjab"
},
{
  date: "May 2026 - Jul 2026",
  border: "border-red-200",
  f_color: "#ef4d56",
  s_color: "#fcd9db",
  class_w: "",
  left: "-63px",
  right: "-119px",
  icon: <CgOrganisation className="text-red-400 text-4xl" />,
  iconBg: "bg-red-100",
  circleBg: "bg-red-400",
  institute: "Software Development Intern",
  duties: "Completed a three-month internship at KloudXel, contributing to the RCI Insurance Claims Management System. Worked on real-world full-stack development using React, TypeScript, C#, ASP.NET, Web API, Entity Framework, and SQL Server, including API integration, database operations, debugging, and feature development."
},
{
  date: "Oct 2025 - Mar 2026",
  border: "border-yellow-200",
  class_w: "",
  left: "0px",
  right: "-119px",
  f_color: "#efb84d",
  s_color: "#fdf1d9",
  icon: <CgOrganisation className="text-yellow-400 text-4xl" />,
  iconBg: "bg-yellow-100",
  circleBg: "bg-yellow-400",
  institute: "MERN Stack Developer Intern",
  duties: "Completed a six-month MERN Stack internship at bVoir Technologies, developing web applications using React.js, Node.js, Express.js, and MySQL. Worked on REST APIs, authentication, database integration, frontend development, and full-stack application features."
}
];

const mobileData = [
  {
    date: "2023 - 2027",
    border: "border-blue-200",
    circleBg: "bg-blue-400",
    position: "70px",
    institute: "BS Computer Science — Final Year",
    duties: "University of the Punjab",
  },
  {
    date: "May 2026 - Jul 2026",
    border: "border-green-200",
    position: "310px",
    circleBg: "bg-green-400",
    institute: "Software Development Intern",
    duties:
      "Completed a three-month internship at KloudXel, contributing to the RCI Insurance Claims Management System. Worked on real-world full-stack development using React, TypeScript, C#, ASP.NET, Web API, Entity Framework, and SQL Server, including API integration, database operations, debugging, and feature development.",
  },
  {
    date: "Oct 2025 - Mar 2026",
    position: "284px",
    border: "border-yellow-200",
    circleBg: "bg-yellow-400",
    institute: "MERN Stack Developer Intern",
    duties:
      "Completed a six-month MERN Stack internship at bVoir Technologies, developing web applications using React.js, Node.js, Express.js, and MySQL. Worked on REST APIs, authentication, database integration, frontend development, and full-stack application features.",
  },
];

export const AboutEduk = ({ display = true }) => {
  return (
    <section className="container flex items-center justify-center pt-5 pb-25">
      <div className="w-[90%] flex items-center flex-col justify-center">
        {display && (
          <SerEdu
            btn_text={"LIFE TIME"}
            heading={"Education & Experience"}
            para={
              "Committed to quality education and practical experience through continuous learning and real-world projects."
            }
          />
        )}

        {/* Desktop */}
        <div className="w-[85%] hidden md:flex pt-25 flex-col gap-10">
          {educationData.map((item, index) => (
            <ExperienceCard key={index} {...item} />
          ))}
        </div>

        {/* Mobile */}
        <div className="w-full mt-20 pt-25 flex md:hidden flex-col gap-55">
          {mobileData.map((item, index) => (
            <MobileEducation key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};
