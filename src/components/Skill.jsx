import NET from "../assets/.NET.svg";
import react from "../assets/React.svg";
import node from "../assets/Node.svg";
import Azure from "../assets/Azure.svg";
import Aws from "../assets/Aws.svg";
import Next from "../assets/Next.js.svg";
import angular from "../assets/Angular.svg";

const skills = [
  {
    skill: ".NET",
    experience:"3 Years Experience",
    icon: NET,
  },
  {
    skill: "Angular",
    experience:"4 Years Experience",
    icon: angular,
  },
  {
    skill: "AWS",
    experience:"5 Years Experience",
    icon: Aws,
  },
  {
    skill: "React",
    experience:"5 Years Experience",
    icon: react,
  },
  {
    skill: "Azure",
    experience:"3 Years Experience",
    icon: Azure,
  },
  {
    skill: "Next.JS",
    experience:"4 Years Experience",
    icon: Next,
  },
  {
    skill: "Node.js",
    experience:"5 Years Experience",
    icon: node,
  },

];

export const Skill = () => {
  return (
    <section className="container flex items-center justify-center">
      <div className="w-[90%] flex items-center justify-center pt-25 pb-25">
        <ul className=" flex items-center justify-center flex-wrap gap-7 md:gap-5">
          {skills.map((ele, index) => {
            return (
              <li key={index}>
                <div className="flex items-center justify-between p-2 rounded shadow-md gap-5">
                  <img src={ele.icon} alt="icon" className="w-8" />
                  <div className="flex flex-col">
                    <h3 className="herotext_color text-[20px] font-medium w-20">
                      {ele.skill}
                    </h3>
                    <span className="text-gray-500 w-32 md:text-[14px]">{ele.experience}</span>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};
