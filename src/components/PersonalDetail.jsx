import { PersonalDetailIcons } from "./PersonalDetailIcons";

export const PersonalDetail = ({
  icons = true,
  displayProperty = "flex items-center justify-between w-[85%]",
  col1Width = "w-[55%]",
  col2Width = "w-[35%]",
}) => {
  const detail = [
    {
      name: "Date of birth",
      det: "06 june 1989",
    },
    {
      name: "Spoken Langages",
      det: "English - French - German",
    },
    {
      name: "Nationality",
      det: "USA",
    },
    {
      name: "Interest",
      det: "Music, Reading, journey",
    },
  ];
  return (
    <section className="container flex items-center justify-center">
      <div className={` ${displayProperty} pt-25`}>
        <div className={`col-1 flex flex-col gap-5 ${col1Width}`}>
          <h2 className="herotext_color w-full font-semibold personal_det text-3xl  relative">
            Personal Details
          </h2>
          <p className="herotext_color w-full text-2xl">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.
          </p>
          {icons && <PersonalDetailIcons />}
        </div>
        <div className={`col-2 ${col2Width}`}>
          <ul className="flex flex-col gap-5">
            {detail.map((Element, index) => {
              return (
                <li key={index} className="flex items-center gap-5">
                  <p className="w-36"> {Element.name} </p> <span>:</span>{" "}
                  <span className="text"> {Element.det} </span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
};
