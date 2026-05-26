import { Swiper, SwiperSlide } from "swiper/react";
import user from "../assets/sahan.jpg";
import user2 from "../assets/viktor.jpg"
import user3 from "../assets/talha.jpg"
import user4 from "../assets/muzafar.jpg"
import user5 from "../assets/waqar.jpg"
import user6 from "../assets/jawad.jpg"
import user7 from "../assets/mansoor.jpg"
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation, Autoplay } from "swiper/modules";
import { SliderDiv } from "./SliderDiv";

const sliderCard = [
  {
    name: "Sahan Nanayakkara",
    text: "Worked with Muhammad Hamid for over a year. Praised communication skills and proactive attitude. Mentioned commitment to high-quality work. Said collaboration experience was great.",
    author: "Sahan Nanayakkara",
    pic:user,
  },
  {
    name: "Viktor Stanišić",
    text: "Praised technical expertise in .NET and React. Mentioned knowledge of DDD, SOLID principles, and design patterns. Highlighted strong communication and architecture skills. Recommended him as a valuable Solution Architect.",
    author: "Viktor Stanišić",
    pic:user2,
  },
  {
    name: "Talha Tahir",
    text: "Said Hamid is professional, mature, a strong team player, and helpful in explaining issues and defects during QA collaboration",
    author: "Talha Tahir",
    pic:user3,
  },
  {
    name: "Muzafar Hussain",
    text: "Praised Muhammad Hamid’s professionalism, diverse technical skills, project discovery participation, software architecture understanding, and strong work ethic.",
    author: "Muzafar Hussain",
    pic:user4,
  },
  {
    name: "Waqar Ahmad",
    text: "Highlighted Hamid’s hard work, loyalty, strong C#/.NET grip, coding style, and clear OOP concepts.",
    author: "Waqar Ahmad",
    pic:user5,
  },
  {
    name: "Jawad Ahmed",
    text: "Mentioned Hamid’s passion, vision, deadline management, focus, and commitment to high-quality standards.",
    author: "Jawad Ahmed",
    pic:user6,
  },
  {
    name: "Mansoor Usman Khan",
    text: "Called Hamid a creative, dedicated, ambitious programmer who worked devotedly on multiple projects.",
    author: "Mansoor Usman Khan",
    pic:user7,
  },
];

export default function Slider() {
  return (
    <section className="container flex items-center justify-center gradient_bg pt-20 pb-25" id="slider">
      <div className="w-[85%] bg-white shadow-md rounded flex items-center justify-between md:p-5 overflow-hidden">
        <Swiper
          navigation={true}
          modules={[Navigation, Autoplay]}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          speed={1000}
          loop={true}
          className="mySwiper"
        >
          <SwiperSlide>
            <SliderDiv sliderCard={sliderCard[0]}/>
          </SwiperSlide>
          <SwiperSlide>
            <SliderDiv sliderCard={sliderCard[1]}/>
          </SwiperSlide>
          <SwiperSlide>
            <SliderDiv sliderCard={sliderCard[2]}/>
          </SwiperSlide>
          <SwiperSlide>
            <SliderDiv sliderCard={sliderCard[3]}/>
          </SwiperSlide>
          <SwiperSlide>
            <SliderDiv sliderCard={sliderCard[4]}/>
          </SwiperSlide>
          <SwiperSlide>
            <SliderDiv sliderCard={sliderCard[5]}/>
          </SwiperSlide>
          <SwiperSlide>
            <SliderDiv sliderCard={sliderCard[6]}/>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}
