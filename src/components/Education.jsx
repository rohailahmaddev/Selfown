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
    institute: "NAML University Islamabad Pakistan",
  }
];

const accordion2 = [
  {
    question: "Senior Full Stack Developer (RCI Insurance Platform)",
    date: "2023 - Present",
    answer:
      "Designed micro-frontend architecture and developed .NET 6 microservices for a large-scale insurance platform.",
    institute:
      "RCI Insurance / Remote Cloud Platform",
  },
  {
    question: "Senior Full Stack Developer (Hospitality SaaS – Hotel Management)",
    date: "2022 - 2023",
    answer:
      "Developed and maintained .NET MAUI cross-platform mobile apps for hotel management SaaS. Migrated Xamarin.Forms to MAUI and implemented native features like camera and barcode scanning.",
    institute:
      "Remote SaaS Platform",
  },
  {
    question: "Software Engineer (TKXEL)",
    date: "2021 - 2023",
    answer:
      "Led architecture design, technical delivery, and performance optimization across multiple enterprise projects. Managed client communication, pre-sales, code reviews, and mentored engineering teams.",
    institute:
      "TKXEL",
  },
  {
    question: "Sr. Software Engineer (Team Lead) (MEZINO TECHNOLOGIES)",
    date: "2016 - 2021",
    answer:
      "Led development teams and delivered enterprise software solutions from design to deployment. Managed task allocation, code quality, and mentored junior developers.",
    institute:
      "MEZINO TECHNOLOGIES",
  },
  {
    question: "Sr. Software Engineer (3S SOLUTIONS)",
    date: "2015 - 2016",
    answer:
      "Developed and maintained .NET applications with focus on backend logic and database systems. Handled bug fixing, feature updates, and production support.",
    institute:
      "3S SOLUTIONS",
  },
  {
    question: "Software Engineer (SIGMATEC)",
    date: "2014 - 2015",
    answer:
      "Built web applications using .NET technologies with frontend and backend integration. Worked on bug fixes, database optimization, and feature development support.",
    institute:
      "SIGMATEC",
  },
  {
    question: "Web Developer (KOHINOOR MAPLE LEAF GROUP – KMLG)",
    date: "2012 - 2013",
    answer:
    "Developed and maintained responsive websites using HTML, CSS, and JavaScript. Handled UI updates, basic backend integration, and website maintenance.",
    institute:
      "KOHINOOR MAPLE LEAF GROUP – KMLG",
  },
];

export const Eductation = () => {
  return (
    <section className="container flex items-center justify-center pb-10">
      <div className="w-[85%] flex items-center justify-center flex-col pt-25 gap-15">
        <SerEdu
          btn_text={"LIFE TIME"}
          heading={"Education & Experience"}
          para={
            "Committed to quality education and practical experience through continuous learning and real-world projects."
          }
        />
        <Accordion image={image} array={accordion} exp={"Education"} />
        <div className="border-b border-dashed border-blue-100 pt-5 w-full"></div>
        <Accordion image={jobImage} array={accordion2} exp={"Experience"}/>
      </div>
    </section>
  );
};
