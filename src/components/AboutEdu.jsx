import ExperienceCard from "./Eductaions";
import { SerEdu } from "./SerEdu";

export const AboutEduk = ({ display = true }) => {
  return (
    <section className="container flex items-center justify-center pt-5 pb-25">
      <div className="w-[85%] flex items-center flex-col justify-center">
        {display && (
          <SerEdu
            btn_text={"LIFE TIME"}
            heading={"Education & Experience"}
            para={
              "We craft digital, graphic and dimensional thinking, to create category leading brand experiences that have meaning ."
            }
          />
        )}
        <div className="w-[70%] pt-25 flex flex-col gap-10">
          <ExperienceCard
            date={"2019-22"}
            border={"border-red-200"}
            iconsColor={"text-red-400"}
            iconBg={"bg-red-100"}
            circleBg={"bg-red-400"}
            institute={"GHI Themes - Web & App IT Company"}
          />
          <ExperienceCard
            date={"2014-18"}
            border={"border-green-200"}
            iconsColor={"text-green-400"}
            iconBg={"bg-green-100"}
            circleBg={"bg-green-400"}
            institute={"ABC themes - Web Design IT Company"}
          />
          <ExperienceCard
            date={"2012-13"}
            border={"border-yellow-200"}
            iconsColor={"text-yellow-400"}
            iconBg={"bg-yellow-100"}
            circleBg={"bg-yellow-400"}
            institute={"MSc IT Master Degree"}
          />
          <ExperienceCard
            date={"2017-08"}
            border={"border-blue-200"}
            iconsColor={"text-blue-400"}
            iconBg={"bg-blue-100"}
            circleBg={"bg-blue-400"}
            institute={"High / Higher secondary school"}
          />
        </div>
      </div>
    </section>
  );
};
