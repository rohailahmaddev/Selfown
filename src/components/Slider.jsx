import { Swiper, SwiperSlide } from "swiper/react";

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
    name: "second.",
    text: "I feel confident imposing change on myself. It's a lot more fun progressing than looking back. That's why scelerisque pretium dolor, sit amet vehicula erat pelleque need throw curve balls.",
    author: "John D. Smith",
  },
  {
    name: "third.",
    text: "I feel confident imposing change on myself. It's a lot more fun progressing than looking back. That's why scelerisque pretium dolor, sit amet vehicula erat pelleque need throw curve balls.",
    author: "Sarah K. Jones",
  },
];

export default function Slider() {
  return (
    <section className="container flex items-center justify-center gradient_bg pt-20 pb-25">
      <div className="w-[85%] bg-white shadow-md rounded flex items-center justify-between p-5 overflow-hidden">
        <Swiper
          navigation={true}
          modules={[Navigation, Autoplay]}
          autoplay={{
            delay: 1000,
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
        </Swiper>
      </div>
    </section>
  );
}
