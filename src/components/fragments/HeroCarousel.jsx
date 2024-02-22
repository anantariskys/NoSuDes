import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

import HeroImage1 from "../../../public/heroImage1.svg";
import HeroImage2 from "../../../public/heroImage2.svg";
import HeroImage3 from "../../../public/heroImage3.svg";
import HeroImage4 from "../../../public/heroImage4.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

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
    <div className="w-full lg:h-screen relative ">
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
      <label className="input absolute -bottom-14 left-1/2 -translate-x-1/2 border-2 mx-auto w-1/2 border-primary-500 z-20  focus-within:border-primary-500 focus-within:outline-none  rounded-2xl   text-primary-500 flex items-center gap-2">
        <FontAwesomeIcon icon={faSearch} />
        <input type="text" className="grow border-none  focus:ring-0 focus:outline-none font-Poppins text-lg font-semibold placeholder-poppins " placeholder="Cari yang sesuai budget" />
      </label>
    </div>
  );
};

export default HeroCarousel;
