import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

import HeroImage1 from "../../../public/heroImage1.svg";
import HeroImage2 from "../../../public/heroImage2.svg";
import HeroImage3 from "../../../public/heroImage3.svg";
import HeroImage4 from "../../../public/heroImage4.svg";


const data = [
  {
    id: 1,
    src: HeroImage1,
  },
  {
    id: 2,
    src: HeroImage2,
  },
  {
    id: 3,
    src: HeroImage3,
  },
  {
    id: 4,
    src: HeroImage4,
  },
];

const HeroCarousel = () => {
  return (
    <div className="w-full h-screen ">
      <Swiper
        slidesPerView={1}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        loop={true}
        modules={[Autoplay]}
      >
        {data.map((item) => (
          <SwiperSlide key={item.id}>
            <img loading="lazy" src={item.src} className="w-full grayscale-[10%] aspect-auto object-contain" alt="heroImage" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HeroCarousel;
