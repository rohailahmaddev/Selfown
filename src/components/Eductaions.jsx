import StickerBadge from "./StickerBadje";

export default function ExperienceCard({
  date,
  border,
  institute,
  iconBg,
  icon,
  rotate,
  duties,
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
           {duties}
          </p>
        </div>
      </div>
      <StickerBadge
      circleBg={circleBg}
  rotate={rotate} 
  date={date}
/>
    </div>
  );
}
