import { Swiper, SwiperSlide } from "swiper/react";
import user from "../assets/user-3.jpg";
import user2 from "../assets/user-5.jpg"
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation, Autoplay } from "swiper/modules";
import { SliderDiv } from "./SliderDiv";

const sliderCard = [
  {
    name: "manter.",
    text: "I feel confident imposing change on myself. It's a lot more fun progressing than looking back. That's why scelerisque pretium dolor, sit amet vehicula erat pelleque need throw curve balls.",
    author: "Larry J. Akins",
  },
  {
    name: "wetransfer",
    text: "I feel confident imposing change on myself. It's a lot more fun progressing than looking back. That's why scelerisque pretium dolor, sit amet vehicula erat pelleque need throw curve balls.",
    author: "John D. Smith",
  }
];

export default function Slider() {
  return (
    <section className="container flex items-center justify-center gradient_bg pt-20 pb-25">
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
            <SliderDiv sliderCard={sliderCard[0]} user={user}/>
          </SwiperSlide>
          <SwiperSlide>
            <SliderDiv sliderCard={sliderCard[1]} user={user2}/>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}
