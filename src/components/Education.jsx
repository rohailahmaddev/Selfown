import { SerEdu } from "./SerEdu";
import image from "../assets/school.png";
import { Accordion } from "./Accordion";
import jobImage from "../assets/job.png";

const accordion = [
  {
    question: "BSCS Bachelor Degree",
    date: "2007-2011",
    answer:
      "NUML Islamabad is an educational institution offering Computer Science programs focused on programming, software development, and modern computing skills.",
    institute: "NUML University Islamabad Pakistan",
  }
];

const accordion2 = [
  {
    question: "Senior Full Stack Developer (RCI Insurance Platform)",
    date: "2023 - Present",
    answer:
      "Led micro-frontend architecture using React and TypeScript on a production insurance platform, backed by a .NET 6 microservices and modular monolith backend. Drove architectural standards, delivered an i18n strategy across React and Angular, and produced a modernisation roadmap for a legacy ASP.NET Web Forms system.",
    institute:
      "RCI Insurance / Remote Cloud Platform",
  },
  {
    question: "Senior Full Stack Developer (InnRoad/DynamX)",
    date: "2022 - 2023",
    answer:
      "Engineered cross-platform mobile applications using .NET MAUI for Android and iOS. Led a zero-regression migration from Xamarin.Forms to .NET MAUI, modernizing architecture and re-engineering native camera and barcode scanning features. Optimized application performance, improved code maintainability, and ensured seamless production delivery across multiple releases.",
    institute:
      "InnRoad/DynamX",
  },
  {
    question: "Principal Software Engineer (TKXEL)",
    date: "2021 - 2023",
    answer:
      "Provided technical leadership across multiple concurrent projects from discovery to delivery. Led pre-sales engagements, designed team structures, mentored engineers, and acted as the final escalation point for critical issues. Spearheaded complex integrations including custom OKTA auth flows and Salesforce APIs on BridgeCorp.",
    institute:
      "TKXEL",
  },
  {
    question: "Sr. Software Engineer (MEZINO TECHNOLOGIES)",
    date: "2016 - 2021",
    answer:
      "Delivered full-stack development across enterprise products, including a serverless file-processing pipeline (Opus/Epilogue Systems) using Azure Functions, SNS, SQS, and Pub/Sub. Contributed to an event-driven forecasting platform (Wahupa/Kinaxis), supporting modernization from monolithic system to microservices while improving scalability and performance.",
    institute:
      "MEZINO TECHNOLOGIES",
  },
];

export const Eductation = () => {
  return (
    <section className="container flex items-center justify-center pb-10">
      <div className="w-[90%] flex items-center justify-center flex-col pt-25 gap-15">
        <SerEdu
          btn_text={"LIFE TIME"}
          heading={"Education & Experience"}
          para={
            "Committed to quality education and practical experience through continuous learning and real-world projects."
          }
        />
        <Accordion image={image} array={accordion} exp={"Education"} />
        <div className="border-b border-dashed border-blue-100 pt-5 w-full"></div>
        <Accordion image={jobImage} array={accordion2} exp={"Experience"} />
      </div>
    </section>
  );
};
