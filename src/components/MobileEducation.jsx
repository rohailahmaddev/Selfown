export const MobileEducation = (
    {
        date,
        border,
        institute,
        iconBg,
        iconsColor,
        circleBg,
      }
) =>{ 
    return(
        <div className="relative w-full cursor-pointer">
        <div
          className={`relative flex items-center  border-2 w-full -z-1 border-dashed ${border} justify-between rounded p-2 overflow-hidden`}
        >
          <div className="p-2 w-full">
            <h3 className="text-lg font-semibold text-gray-700 w-full">{institute}</h3>
            <p className="text-gray-500 font-semibold w-full text-justify">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              malesuada tellus lorem, et condimentum neque commodo
            </p>
          </div>
        </div>
        <div className=" w-30 absolute -top-25 right-31 h-30 flex items-center justify-center">
          <div
            className={`${circleBg} w-full h-full rounded-full flex items-center justify-center text-white font-bold text-lg`}
          >
            {date}
          </div>
        </div>
      </div>
    )
}