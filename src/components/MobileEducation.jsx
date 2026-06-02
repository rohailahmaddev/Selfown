export const MobileEducation = (
  {
    date,
    border,
    institute,
    duties,
    circleBg,
    position
  }
) => {
  const colorMap = {
    "bg-red-400": "#f87171",
    "bg-green-400": "#4ade80",
    "bg-blue-400": "#60a5fa",
    "bg-yellow-400": "#facc15",
  };
  return (
    <div className="relative w-full cursor-pointer">
      <div
        className={`relative flex items-center  border-2 w-full -z-1 border-dashed ${border} justify-between rounded p-2 overflow-hidden`}
      >
        <div className="p-2 w-full">
          <h3 className="text-lg font-semibold text-gray-700 w-full">{institute}</h3>
          <p className="text-gray-500 font-semibold w-full">
            {duties}
          </p>
        </div>
      </div>
      <div className={` rotate-0`}>
        <div className={`mobile_timeline-year`}
          style={{ background: `linear-gradient(60deg, ${colorMap[circleBg]}, #fcd9db)`,
          "--circle-position":position
        }}
        ><div>{date}</div></div>
      </div>
    </div>
  )
}