import ExperienceCard from "./Eductaions";
import { MobileEducation } from "./MobileEducation";
import { RxPeople } from "react-icons/rx";
import { FaUniversity } from "react-icons/fa";
import { CgOrganisation } from "react-icons/cg";
import { SerEdu } from "./SerEdu";
import { FaTrophy } from "react-icons/fa";
import { FaGraduationCap } from "react-icons/fa";
import { BiSolidSchool } from "react-icons/bi";

export const AboutEduk = ({ display = true }) => {
  return (
    <section className="container flex items-center justify-center pt-5 pb-25">
      <div className="w-[85%] flex items-center flex-col justify-center">
        {display && (
          <SerEdu
            btn_text={"LIFE TIME"}
            heading={"Education & Experience"}
            para={
              "Committed to quality education and practical experience through continuous learning and real-world projects."
            }
          />
        )}
        <div className=" w-[70%] hidden  md:flex pt-25  flex-col gap-10">
        <ExperienceCard
            date={"2007-11"}
            border={"border-green-200"}
            rotate={"rotate-180"}
            icon={<FaUniversity className={`text-green-400 text-4xl`}/>}
            iconBg={"bg-green-100"}
            circleBg={"bg-green-400"}
            institute={"BSCS Bacholar Degree"}
            duties={"NAML University Islamabad"}
          />
          <ExperienceCard
            date={"2023-Present"}
            border={"border-red-200"}
            icon={<CgOrganisation className={`text-red-400 text-4xl`}/>}
            iconBg={"bg-red-100"}
            circleBg={"bg-red-400"}
            institute={"Senior Full Stack Developer (RCI Insurance Platform)"}
            duties={"Designed micro-frontend architecture and developed .NET 6 microservices for a large-scale insurance platform."}
          />
          <ExperienceCard
            date={"2022-23"}
            border={"border-green-200"}
            rotate={"rotate-180"}
            icon={<CgOrganisation className={`text-green-400 text-4xl`}/>}
            iconBg={"bg-green-100"}
            circleBg={"bg-green-400"}
            institute={"Senior Full Stack Developer (Hospitality SaaS – Hotel Management)"}
            duties={"Built .NET MAUI hotel management app and migrated Xamarin.Forms to MAUI with camera and barcode features."}
          />
          <ExperienceCard
            date={"2021-23"}
            border={"border-yellow-200"}
            iconsColor={""}
            icon={<CgOrganisation className={`text-yellow-400 text-4xl`}/>}
            iconBg={"bg-yellow-100"}
            circleBg={"bg-yellow-400"}
            institute={"Software Engineer (TKXEL)"}
            duties={"Led architecture design, technical delivery, and performance optimization across multiple enterprise projects. Managed client communication, pre-sales, code reviews, and mentored engineering teams."}
          />
          <ExperienceCard
            date={"2016-21"}
            border={"border-blue-200"}
            rotate={"rotate-180"}
            iconsColor={"text-blue-400"}
            icon={<CgOrganisation className={`text-blue-400 text-4xl`}/>}
            iconBg={"bg-blue-100"}
            circleBg={"bg-blue-400"}
            institute={"Sr. Software Engineer (Team Lead) (MEZINO TECHNOLOGIES)"}
            duties={"Led development teams and delivered enterprise software solutions from design to deployment. Managed task allocation, code quality, and mentored junior developers."}
          />
          <ExperienceCard
            date={"2015-16"}
            border={"border-yellow-200"}
            iconsColor={""}
            icon={<CgOrganisation className={`text-yellow-400 text-4xl`}/>}
            iconBg={"bg-yellow-100"}
            circleBg={"bg-yellow-400"}
            institute={"Sr. Software Engineer (3S SOLUTIONS)"}
            duties={"Developed and maintained .NET applications with focus on backend logic and database systems. Handled bug fixing, feature updates, and production support."}
          />
          <ExperienceCard
            date={"2014-15"}
            border={"border-blue-200"}
            rotate={"rotate-180"}
            iconsColor={"text-blue-400"}
            icon={<CgOrganisation className={`text-blue-400 text-4xl`}/>}
            iconBg={"bg-blue-100"}
            circleBg={"bg-blue-400"}
            institute={"Software Engineer (SIGMATEC)"}
            duties={"Built web applications using .NET technologies with frontend and backend integration. Worked on bug fixes, database optimization, and feature development support."}
          />
          <ExperienceCard
            date={"2015-16"}
            border={"border-yellow-200"}
            iconsColor={""}
            icon={<CgOrganisation className={`text-yellow-400 text-4xl`}/>}
            iconBg={"bg-yellow-100"}
            circleBg={"bg-yellow-400"}
            institute={"Web Developer (KOHINOOR MAPLE LEAF GROUP – KMLG)"}
            duties={"Developed and maintained .NET applications with focus on backend logic and database systems. Handled bug fixing, feature updates, and production support."}
          />
        </div>
        <div className="w-full mt-20 pt-25 flex md:hidden flex-col gap-35">
          <MobileEducation
           date={"2007-11"}
           border={"border-blue-200"}
           circleBg={"bg-blue-400"}
           institute={"BSCS Bacholar Degree"}
           />
          <MobileEducation
            date={"2014-18"}
            border={"border-green-200"}
            circleBg={"bg-green-400"}
            institute={"Senior Full Stack Developer (RCI Insurance Platform)"}
           />
            <MobileEducation
            date={"2012-13"}
            border={"border-yellow-200"}
            circleBg={"bg-yellow-400"}
            institute={"Senior Full Stack Developer (Hospitality SaaS – Hotel Management)"}
          />
          <MobileEducation
            date={"2017-08"}
            border={"border-blue-200"}
            circleBg={"bg-blue-400"}
            institute={"Software Engineer (TKXEL)"}
          />
          <MobileEducation
            date={"2012-13"}
            border={"border-yellow-200"}
            circleBg={"bg-yellow-400"}
            institute={"Sr. Software Engineer (Team Lead) (MEZINO TECHNOLOGIES)"}
          />
          <MobileEducation
            date={"2014-18"}
            border={"border-green-200"}
            circleBg={"bg-green-400"}
            institute={"Sr. Software Engineer (3S SOLUTIONS)"}
           />
          <MobileEducation
           date={"2007-11"}
           border={"border-blue-200"}
           circleBg={"bg-blue-400"}
           institute={"Software Engineer (SIGMATEC)"}
           />
          <MobileEducation
            date={"2012-13"}
            border={"border-yellow-200"}
            circleBg={"bg-yellow-400"}
            institute={"Web Developer (KOHINOOR MAPLE LEAF GROUP – KMLG)"}
          />
        </div>
      </div>
    </section>
  );
};
