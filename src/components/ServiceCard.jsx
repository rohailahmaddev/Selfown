import { TfiWorld } from "react-icons/tfi";
import { FaCartShopping } from "react-icons/fa6";
import { IoServer } from "react-icons/io5";
import { SerEdu } from "./SerEdu";

const services = [
  {
    icon: <IoServer />,
    iconBg: "bg-purple-100",
    iconColor: "text-purple-600",
    label: "Backend Development",
    title: "APIs & Backend Systems",
    desc: "Reliable backend services and REST APIs for web applications, with clean architecture, authentication, validation, and database integration.",
    items: [
      "REST API development with Node.js and Express.js",
      "Authentication with JWT and HTTP-only cookies",
      "MySQL database design and Prisma ORM",
      "CRUD operations, validation, and error handling",
      "Role-based access control and protected APIs",
    ],
    tags: ["Node.js", "Express.js", "TypeScript", "MySQL", "Prisma", "MongoDB"],
  },

  {
    icon: <TfiWorld />,
    iconBg: "bg-teal-100",
    iconColor: "text-teal-600",
    label: "Frontend & Web",
    title: "Modern Full-Stack Web Applications",
    desc: "Responsive and user-friendly web applications built with React and modern TypeScript-based development practices.",
    items: [
      "React and Next.js application development",
      "Responsive interfaces with Tailwind CSS",
      "TypeScript-based frontend development",
      "State management with Redux Toolkit",
      "REST API integration and dynamic web interfaces",
    ],
    tags: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Redux"],
  },

  {
    icon: <FaCartShopping />,
    iconBg: "bg-blue-100",
    iconColor: "text-blue-600",
    label: "Business Solutions",
    title: "E-commerce & CMS Development",
    desc: "Custom business websites, e-commerce platforms, and content management systems with secure admin panels and database-driven features.",
    items: [
      "E-commerce websites with product and inventory management",
      "Shopping carts, orders, reviews, and product variants",
      "Admin dashboards and content management systems",
      "Blog platforms with image upload and publishing",
      "Cloudinary integration for image and media management",
    ],
    tags: ["E-commerce", "CMS", "React", "Node.js", "MySQL", "MongoDB"],
  },
];
export const ServicesCard = ({ display = true, bg = "gradient_bg" }) => {
  return (
    <section className={`container flex items-center justify-center ${bg} ${display ? "pt-25" : "pt-0"}`}>
      <div className="w-[90%] flex items-center justify-center flex-col ">
        {display && (
          <SerEdu
            btn_text={"EXPERTISE"}
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
                <p className="text-[13px] uppercase tracking-widest text-gray-500 font-medium">
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