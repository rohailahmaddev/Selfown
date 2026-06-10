import ExperienceCard from "./Eductaions";
import { MobileEducation } from "./MobileEducation";
import { FaUniversity } from "react-icons/fa";
import { CgOrganisation } from "react-icons/cg";
import { SerEdu } from "./SerEdu";

const educationData = [
  {
    date: "2007-11",
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
    institute: "BSCS Bacholar Degree",
    duties: "NUML University Islamabad",
  },
  {
    date: "2023-Present",
    border: "border-red-200",
    f_color: "#ef4d56",
    s_color: "#fcd9db",
    class_w: "",
    left: "-63px",
    right: "-119px",
    icon: <CgOrganisation className="text-red-400 text-4xl" />,
    iconBg: "bg-red-100",
    circleBg: "bg-red-400",
    institute: "Sr. Full Stack Developer (RCI Insurance Platform)",
    duties: "Led micro-frontend architecture using React and TypeScript on a production insurance platform, backed by a .NET 6 microservices and modular monolith backend. Drove architectural standards, delivered an i18n strategy across React and Angular, and produced a modernisation roadmap for a legacy ASP.NET Web Forms system.",
  },
  {
    date: "2022-23",
    border: "border-green-200",
    left: "0px",
    right: "-119px",
    class_w: "",
    f_color: "#4def6a",
    s_color: "#d9fce1",
    rotate: "rotate-180",
    icon: <CgOrganisation className="text-green-400 text-4xl" />,
    iconBg: "bg-green-100",
    circleBg: "bg-green-400",
    institute: "Sr. Full Stack Developer (InnRoad/DynamX)",
    duties:
      "Engineered cross-platform mobile applications using .NET MAUI for Android and iOS. Led a zero-regression migration from Xamarin.Forms to .NET MAUI, modernizing architecture and re-engineering native camera and barcode scanning features. Optimized application performance, improved code maintainability, and ensured seamless production delivery across multiple releases.",
  },
  {
    date: "2021-23",
    border: "border-yellow-200",
    class_w: "",
    left: "-63px",
    right: "-119px",
    f_color: "#efb84d",
    s_color: "#fdf1d9",
    icon: <CgOrganisation className="text-yellow-400 text-4xl" />,
    iconBg: "bg-yellow-100",
    circleBg: "bg-yellow-400",
    institute: "Pricipal Software Engineer (TKXEL)",
    duties:
      "Provided technical leadership across multiple concurrent projects from discovery to delivery. Led pre-sales engagements, designed team structures, mentored engineers, and acted as the final escalation point for critical issues. Spearheaded complex integrations including custom OKTA auth flows and Salesforce APIs on BridgeCorp.",
  },
  {
    date: "2016-21",
    border: "border-blue-200",
    class_w: "",
    left: "0px",
    right: "-119px",
    f_color: "#4d8bef",
    s_color: "#d9e8fc",
    rotate: "rotate-180",
    icon: <CgOrganisation className="text-blue-400 text-4xl" />,
    iconBg: "bg-blue-100",
    circleBg: "bg-blue-400",
    institute: "Sr. Software Engineer (Mezino Technologies)",
    duties:
      "Delivered full-stack development across enterprise products, including a serverless file-processing pipeline (Opus/Epilogue Systems) using Azure Functions, SNS, SQS, and Pub/Sub. Contributed to an event-driven forecasting platform (Wahupa/Kinaxis), supporting modernization from monolithic system to microservices while improving scalability and performance.",
  },
];

const mobileData = [
  {
    date: "2007-11",
    border: "border-blue-200",
    circleBg: "bg-blue-400",
    position: "70px",
    institute: "BSCS Bacholar Degree",
    duties: "NUML University Islamabad",
  },
  {
    date: "2014-18",
    border: "border-green-200",
    position: "310px",
    circleBg: "bg-green-400",
    institute: "Senior Full Stack Developer (RCI Insurance Platform)",
    duties:
      "Led micro-frontend architecture using React and TypeScript on a production insurance platform, backed by a .NET 6 microservices and modular monolith backend. Drove architectural standards, delivered an i18n strategy across React and Angular, and produced a modernisation roadmap for a legacy ASP.NET Web Forms system.",
  },
  {
    date: "2012-13",
    position: "284px",
    border: "border-yellow-200",
    circleBg: "bg-yellow-400",
    institute: "Senior Full Stack Developer (InnRoad/DynamX)",
    duties:
      "Engineered cross-platform mobile applications using .NET MAUI for Android and iOS. Led a zero-regression production migration from Xamarin.Forms to .NET MAUI, re-engineering native camera and barcode scanning features — improving performance and long-term maintainability.",
  },
  {
    date: "2017-08",
    border: "border-blue-200",
    circleBg: "bg-blue-400",
    position: "310px",
    institute: "Principal Software Engineer (TKXEL)",
    duties:
      "Provided technical leadership across multiple concurrent projects from discovery to delivery. Led pre-sales engagements, designed team structures, mentored engineers, and acted as the final escalation point for critical issues. Spearheaded complex integrations including custom OKTA auth flows and Salesforce APIs on BridgeCorp.",
  },
  {
    date: "2012-13",
    border: "border-yellow-200",
    position: "310px",
    circleBg: "bg-yellow-400",
    institute: "Sr. Software Engineer (MEZINO TECHNOLOGIES)",
    duties:
      "Delivered full stack development across enterprise products including a serverless file-processing pipeline (Opus/Epilogue Systems) using Azure Functions, SNS, SQS and Pub/Sub, and an event-driven forecasting platform (Wahupa/Kinaxis) with architectural modernisation from monolith to microservices.",
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
