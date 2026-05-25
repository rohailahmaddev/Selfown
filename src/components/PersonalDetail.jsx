import { PersonalDetailIcons } from "./PersonalDetailIcons";

export const PersonalDetail = ({
  icons = true,
  displayProperty = "flex items-center md:flex-row flex-col justify-between w-[85%]",
  col1Width = "w-[50%]",
  col2Width = "w-[35%]",
}) => {
  const detail = [
    {
      name: "Spoken Langages",
      det: "English - Urdu",
    },
    {
      name: "Nationality",
      det: "Pakistani",
    },
    {
      name: "Interest",
      det: "Book reading, Bedminton, football player",
    },
  ];
  return (
    <section className="container flex items-center justify-center">
      <div className={` ${displayProperty} pt-25 gap-10 md:gap-6`}>
        <div className={`col-1 flex flex-col gap-5 md:${col1Width}`}>
          <h2 className="herotext_color w-full font-semibold personal_det text-3xl  relative">
            Personal Details
          </h2>
          <p className="herotext_color w-full text-2xl">
          Full-stack developer building scalable, efficient web applications with clean code, solid backend logic, and responsive frontend interfaces.          </p>
          {/* {icons && <PersonalDetailIcons />} */}
        </div>
        <div className={`col-2  md:${col2Width}`}>
          <ul className="flex flex-col gap-5">
            {detail.map((Element, index) => {
              return (
                <li key={index} className="flex items-center gap-5 ">
                  <p className="w-20 md:w-35 text-[10px] md:text-[18px]"> {Element.name} </p> <span>:</span>{" "}
                  <span className="text text-[10px] md:text-[18px]"> {Element.det} </span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
};
