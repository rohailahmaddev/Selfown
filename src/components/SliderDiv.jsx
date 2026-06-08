import { FaStar } from "react-icons/fa6";

export const SliderDiv = ({ sliderCard }) => {
  console.log(sliderCard?.name)
  return (
    <div className="flex items-center justify-center flex-col gap-4 md:gap-7 px-6 py-6 md:pt-10 w-full">
      <h1 className="text-2xl md:text-4xl font-bold text-center slider-heading">
        {sliderCard?.name}
      </h1>
      <p className="text-base md:text-2xl text-center w-[90%] md:w-[75%] italic">
        {sliderCard?.text}
      </p>
      <div className="flex flex-col items-center gap-3">
        <img
          src={sliderCard?.pic}
          alt="user image"
          className="rounded-full w-14 h-14 md:w-16 md:h-16 object-cover"
        />
        <h3 className="text-center text-sm md:text-base">{sliderCard?.author}</h3>
        <span className="flex items-center justify-center gap-2">
          {Array.from({ length: 5 }).map((_, index) => (
            <FaStar key={index} className="text-yellow-500" />
          ))}
        </span>
      </div>
    </div>
  );
};
