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
    icon: NET,
  },
  {
    skill: "Angular",
    icon: angular,
  },
  {
    skill: "AWS",
    icon: Aws,
  },
  {
    skill: "React",
    icon: react,
  },
  {
    skill: "Azure",
    icon: Azure,
  },
  {
    skill: "Next.JS",
    icon: Next,
  },
  {
    skill: "Node.js",
    icon: node,
  },

];

export const Skill = () => {
  return (
    <section className="container flex items-center justify-center">
      <div className="w-[85%] flex items-center justify-center pt-25 pb-25">
        <ul className=" flex items-center justify-center flex-wrap gap-7 md:gap-12">
          {skills.map((ele, index) => {
            return (
              <li key={index}>
                <div className="flex items-center justify-between p-4 rounded shadow-md gap-7">
                  <img src={ele.icon} alt="icon" className="w-10" />
                  <div className="flex flex-col">
                    <h3 className="herotext_color text-[20px] font-medium w-20">
                      {ele.skill}
                    </h3>
                    {/* <span className="herotext_color w-39">{ele.experience}</span> */}
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
