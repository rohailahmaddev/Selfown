import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation, Autoplay } from "swiper/modules";
import { SliderDiv } from "./SliderDiv";
import { Data } from "../context/Store";
import { useContext } from "react";

const sliderCard = [
  {
    name: "Full-Stack Development",
    text: "Building responsive web applications with React, Next.js, Node.js, Express.js, TypeScript, and modern database technologies.",
    author: "My Core Focus",
  },
  {
    name: "Real-World Experience",
    text: "Contributed to a real-world insurance claims management system during my software development internship at KloudXel.",
    author: "Professional Experience",
  },
  {
    name: "MERN Stack Development",
    text: "Completed a six-month MERN Stack internship at bVoir Technologies, working on frontend, backend, APIs, authentication, and database integration.",
    author: "Internship Experience",
  },
  {
    name: "Backend & APIs",
    text: "Developing REST APIs with Node.js and Express.js, including authentication, validation, database operations, and role-based access control.",
    author: "Backend Development",
  },
  {
    name: "Database Development",
    text: "Working with both relational and NoSQL databases, including MySQL, Prisma, MongoDB, and Mongoose.",
    author: "Database Skills",
  },
  {
    name: "AI-Integrated Applications",
    text: "Interested in integrating AI capabilities into practical web applications and building useful AI-powered products.",
    author: "AI Integration",
  },
];
export default function Slider() {

  const {btnColor} = useContext(Data)
  return (
    <section className="container flex items-center justify-center gradient_bg pt-20 pb-25" id="slider"
    style={{ "--swiper-theme-color": btnColor }}
    >
      <div className="w-[88%] bg-white shadow-md rounded flex items-center justify-between md:p-5 overflow-hidden">
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
            <SliderDiv sliderCard={sliderCard[0]} />
          </SwiperSlide>
          <SwiperSlide>
            <SliderDiv sliderCard={sliderCard[1]} />
          </SwiperSlide>
          <SwiperSlide>
            <SliderDiv sliderCard={sliderCard[2]} />
          </SwiperSlide>
          <SwiperSlide>
            <SliderDiv sliderCard={sliderCard[3]} />
          </SwiperSlide>
          <SwiperSlide>
            <SliderDiv sliderCard={sliderCard[4]} />
          </SwiperSlide>
          <SwiperSlide>
            <SliderDiv sliderCard={sliderCard[5]} />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}
