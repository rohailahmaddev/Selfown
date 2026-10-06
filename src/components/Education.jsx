import { SerEdu } from "./SerEdu";
import image from "../assets/school.png";
import { Accordion } from "./Accordion";
import jobImage from "../assets/job.png";

const accordion = [
  {
    question: "BS Computer Science — Final Year",
    date: "2023 - 2027",
    answer:
      "Punjab University is an educational institution offering Computer Science programs focused on programming, software development, and modern computing skills.",
    institute: "University of the Punjab",
  }
];

const accordion2 = [
  {
    question: "Software Development Intern (KloudXel)",
    date: "May 2026 - Jul 2026",
    answer:"Completed a three-month internship at KloudXel, contributing to the RCI Insurance Claims Management System. Worked on real-world full-stack development using React, TypeScript, C#, ASP.NET, Web API, Entity Framework, and SQL Server, including API integration, database operations, debugging, and feature development.",
    institute:
      "KloudXel",
  },
  {
    question: "MERN Stack Developer Intern (bVoir Technologies)",
    date: "Oct 2025 - Mar 2026",
    answer:
      "Completed a six-month MERN Stack internship at bVoir Technologies, developing web applications using React.js, Node.js, Express.js, and MySQL. Worked on REST APIs, authentication, database integration, frontend development, and full-stack application features.",
    institute:
      "bVoir Technologies",
  }
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
