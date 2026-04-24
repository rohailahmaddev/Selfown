import user from "../assets/user-3.jpg";
import { FaStar } from "react-icons/fa6";

export const SliderDiv = ({sliderCard}) => {
    return(
          <div
                      className="flex items-center justify-center flex-col gap-7 pt-10 w-full"
                    >
                        <h1 className="text-4xl font-bold text-center herotext_color">
                          {sliderCard.name}
                        </h1>
                        <p className="text-2xl text-center w-[75%] italic">
                          {sliderCard.text}
                        </p>
                        <div className="flex flex-col items-center gap-3">
                          <img
                            src={user}
                            alt="user image"
                            className="rounded-full w-30 h-30"
                          />
                          <h3 className="text-center">{sliderCard.author}</h3>
                          <span className="flex items-center justify-center gap-2">
                            {Array.from({ length: 6 }).map((_, index) => {
                              return <FaStar key={index} className="text-yellow-500"/>
                            })}
                          </span>
        </div>
    </div>
    )
}