import { FaTrophy } from "react-icons/fa";

export default function ExperienceCard({date,border,institute,iconBg,iconsColor,circleBg}) {
  return (
<div className="relative w-full">
    <div className={`relative flex items-center  border-2 w-[90%] -z-1 border-dashed ${border} border-r-0 justify-between rounded p-2 overflow-hidden`}>
      <div className={`border-2 ${border} p-1 rounded-lg`}>
        <div className={`${iconBg} rounded-lg p-13 shadow-inner flex items-center justify-center`}>
          <FaTrophy className={`${iconsColor} text-4xl`} />
        </div>
      </div>
      <div className="pr-15 w-[65%]">
        <h3 className="text-lg font-semibold text-gray-700">
          {institute}
        </h3>
        <p className="text-gray-500 font-semibold">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer malesuada tellus lorem, et condimentum neque commodo
        </p>
      </div>
      
    </div>
    <div className=" w-45 absolute -top-1 -right-10 h-45 flex items-center justify-center">
        <div className={`${circleBg} w-full h-full rounded-full flex items-center justify-center text-white font-bold text-lg`}>
          {date}
        </div>
        <div className="fold"></div>
    </div>
</div>
  );
}