import { FaStar } from "react-icons/fa6";

export const SliderDiv = ({ sliderCard }) => {
  console.log(sliderCard?.name)
  return (
    <div className="flex items-center justify-center flex-col gap-3 md:gap-7 p-4 md:pt-10 w-full">
      <h1 className="text-4xl font-bold text-center herotext_color">
        {sliderCard?.name}
      </h1>
      <p className="text-xl md:text-2xl  text-center w-[75%] italic">{sliderCard?.text}</p>
      <div className="flex flex-col items-center gap-3">
        <img src={sliderCard?.pic} alt="user image" className="rounded-full w-15 h-15" />
        <h3 className="text-center">{sliderCard?.author}</h3>
        <span className="flex items-center justify-center gap-2">
          {Array.from({ length: 5}).map((_, index) => {
            return <FaStar key={index} className="text-yellow-500" />;
          })}
        </span>
      </div>
    </div>
  );
};
