

export default function ExperienceCard({
  date,
  border,
  institute,
  iconBg,
  icon,
  rotate,
  iconsColor,
  circleBg,
}) {
  return (
    <div className={`relative w-full cursor-pointer ${rotate}`}>
      <div
        className={`relative flex items-center  border-2 w-[90%] -z-1 border-dashed ${border} border-r-0 justify-between rounded p-2 overflow-hidden`}
      >
        <div className={`border-2 ${border} p-1 rounded-lg ${rotate}`}>
          <div
            className={`${iconBg} rounded-lg p-13 shadow-inner flex items-center justify-center`}
          >
           {icon}
          </div>
        </div>
        <div className={` w-[65%] ${rotate?`pl-25 ${rotate}`:`pr-15`} `}>
          <h3 className="text-lg font-semibold text-gray-700">{institute}</h3>
          <p className="text-gray-500 font-semibold">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            malesuada tellus lorem, et condimentum neque commodo
          </p>
        </div>
      </div>
      <div className={`w-45 absolute -top-1 -right-10 h-45 flex items-center justify-center ${rotate}`}>
        <div
          className={`${circleBg} w-full h-full rounded-full flex items-center justify-center text-white font-bold text-lg`}
        >
          {date}
        </div>
        <div className="fold"></div>
      </div>
    </div>
  );
}
