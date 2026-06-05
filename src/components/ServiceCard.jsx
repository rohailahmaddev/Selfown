import { HiMiniCodeBracket } from "react-icons/hi2";
import { TfiWorld } from "react-icons/tfi";
import { FaDesktop } from "react-icons/fa";
import { MdSmartphone } from "react-icons/md";
import { IoServer } from "react-icons/io5";
import { FiLayout } from "react-icons/fi";
import { SerEdu } from "./SerEdu";

// export const ServicesCard = ({ display = true, bg = "gradient_bg" }) => {
//   const cards = [
//     {
//       bg: "bg-red-100",
//       text:"text-red-500",
//       icon: <HiMiniCodeBracket />,
//       name: "Custom Software",
//       discription:
//         "Building scalable custom software solutions using .NET and .NET Core for modern business needs.",
//     },
//     {
//       bg: "bg-blue-100",
//       text:"text-blue-500",
//       icon: <FaDesktop />,
//       name: "Desktop Applications",
//       discription:
//         "Developing powerful desktop applications with WinForms, WPF, and .NET MAUI.",
//     },
//     {
//       bg: "bg-green-100",
//       text:"text-green-500",
//       icon: <TfiWorld />,
//       name: "Web Development",
//       discription:
//         "Creating responsive web applications using ASP.NET Core, MVC, Razor Pages, and Blazor.",
//     },
//     {
//       bg: "bg-red-100",
//       text:"text-red-500",
//       icon: <MdSmartphone />,
//       name: "Mobile Apps",
//       discription:
//         "Cross-platform mobile app development with Xamarin and .NET MAUI for Android and iOS.",
//     },
//     {
//       bg: "bg-blue-100",
//       text:"text-blue-500",
//       icon: <IoServer />,
//       name: "API & Backend",
//       discription:
//         "RESTful API development, cloud integration, and backend services with Node.js and Next.js.",
//     },
//     {
//       bg: "bg-green-100",
//       text:"text-green-500",
//       icon: <FiLayout />,
//       name: "Frontend Solutions",
//       discription:
//         "Modern frontend development using React, Next.js, Angular, TypeScript, Bootstrap, and Kendo UI.",
//     },
//   ];
//   const array = display ? cards.slice(0, 3) : cards;
//   return (
//     <section
//       className={`container flex items-center justify-center ${bg} ${display ? "pt-25" : "pt-0"}`}
//     >
//       <div className="w-[90%] flex items-center justify-center flex-col ">
//         {display && (
//           <SerEdu
//             btn_text={"SERVICES"}
//             heading={"My Services"}
//             para={
//               "Build scalable full stack web applications with modern frontend, backend, and API solutions for fast and seamless digital experiences."}
//           />
//         )}{" "}
//         <div className="pt-25">
//           <ul
//             className={`${display ? "grid grid-col-1 md:grid-cols-3" : "grid grid-cols-3 grid-rows-2"} items-center bg-transparent gap-5`}
//           >
//             {array.map((ele, index) => {
//               return (
//                 <li key={index} className="">
//                   <div className="shadow-md flex flex-col gap-5 p-6 bg-white pb-15">
//                     <div className={`${ele.bg} rounded ${ele.text} p-3 w-13 h-13 flex justify-center items-center text-2xl`}>
//                       {ele.icon}
//                     </div>
//                     <h2 className="text-2xl herotext_color font-medium">
//                       {ele.name}
//                     </h2>
//                     <p className="herotext_color h-20">{ele.discription}</p>
//                   </div>
//                 </li>
//               );
//             })}
//           </ul>
//         </div>
//       </div>
//     </section>
//   );
// };


const services = [
  {
    icon: <IoServer />,
    iconBg: "bg-purple-900/60",
    iconColor: "text-purple-400",
    label: "Backend & Architecture",
    title: "Enterprise & API Development",
    desc: "Scalable backend systems and clean API design for complex business domains — built to last in production.",
    items: [
      "REST & GraphQL APIs with .NET Core, Node.js, NestJS",
      "Microservices, event-driven & serverless architectures",
      "Auth systems — OAuth, OIDC, JWT, OKTA, Auth0",
      "SQL Server, PostgreSQL, MongoDB, Redis",
      "AWS & Azure — Lambda, Functions, SQS, SNS, S3",
    ],
    tags: [".NET Core", "Node.js", "C#", "Azure", "AWS"],
  },
  {
    icon: <TfiWorld />,
    iconBg: "bg-teal-900/60",
    iconColor: "text-teal-400",
    label: "Frontend & Web",
    title: "Modern Web Applications",
    desc: "Responsive, performant web apps with clean component architecture — from server-rendered pages to rich SPAs.",
    items: [
      "React, Next.js, Angular — full frontend ownership",
      "TypeScript, TanStack Query, Redux, Zustand",
      "ASP.NET Core MVC, Blazor, Razor Pages",
      "Micro-frontend architecture & design systems",
      "Performance tuning, accessibility, i18n",
    ],
    tags: ["React", "Next.js", "TypeScript", "Blazor"],
  },
  {
    icon: <MdSmartphone />,
    iconBg: "bg-blue-900/60",
    iconColor: "text-blue-400",
    label: "Desktop & Mobile",
    title: "Cross-Platform App Development",
    desc: "Native-quality desktop and mobile apps using the modern .NET ecosystem — one codebase, every platform.",
    items: [
      ".NET MAUI for iOS & Android from a single codebase",
      "WPF & WinForms for Windows enterprise tools",
      "Xamarin to .NET MAUI migrations",
      "React Native & Expo for JS-based mobile",
      "Camera, barcode, native hardware integrations",
    ],
    tags: [".NET MAUI", "WPF", "React Native", "WinForms"],
  },
];

export const ServicesCard = ({ display = true, bg = "gradient_bg" }) => {
  return (
    <section className={`container flex items-center justify-center ${bg} ${display ? "pt-25" : "pt-0"}`}>
      <div className="w-[90%] flex items-center justify-center flex-col ">
        {display && (
          <SerEdu
            btn_text={"SERVICES"}
            heading={"My Services"}
            para={
              "Build scalable full stack web applications with modern frontend, backend, and API solutions for fast and seamless digital experiences."}
          />
        )}
        <div className="pt-25 flex items-center flex-col md:flex-row gap-10 bg-transparent">
          {services.map((s, i) => (
            <div
              key={i}
              className="bg-white shadow-sm flex-col rounded-xl p-6 flex gap-4 md:h-130"
            >
              <div className={`w-10 h-10 rounded-lg flex items-center justify-center text-xl ${s.iconBg} ${s.iconColor}`}>
                {s.icon}
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-widest text-gray-500 font-medium">
                  {s.label}
                </p>
                <h3 className="text-lg font-semibold herotext_color  leading-snug mt-1">
                  {s.title}
                </h3>
              </div>

              <p className="text-sm text-black leading-relaxed">{s.desc}</p>

              <hr className="border-white/8" />

              <ul className="flex flex-col gap-2">
                {s.items.map((item, j) => (
                  <li key={j} className="flex items-start gap-2 text-[13px] text-gray-900 leading-snug">
                    <span className="text-green-500 mt-0.5">✓</span>
                    {item}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2 mt-auto pt-1">
                {s.tags.map((tag, j) => (
                  <span
                    key={j}
                    className="text-[11px] font-medium bg-blue-100 px-2.5 py-1 rounded-md text-gray-900"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}