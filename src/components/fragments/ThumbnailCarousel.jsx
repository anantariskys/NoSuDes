import { Splide, SplideSlide } from '@splidejs/react-splide'
import { useEffect, useRef } from 'react';

import thumbnailImage1 from "../../../public/thumbnailCarousel1.png";
import thumbnailImage2 from "../../../public/thumbnailCarousel2.png";
import thumbnailImage3 from "../../../public/thumbnailCarousel3.png";
import thumbnailImage4 from "../../../public/thumbnailCarousel4.png";
import thumbnailImage5 from "../../../public/thumbnailCarousel5.png";

const data = [
  {
    gambar: thumbnailImage1,
  },
  {
    gambar: thumbnailImage2,
  },
  {
    gambar: thumbnailImage3,
  },
  {
    gambar: thumbnailImage4,
  },
  {
    gambar: thumbnailImage5,
  },
  {
    gambar: thumbnailImage1,
  },
  {
    gambar: thumbnailImage2,
  },
  {
    gambar: thumbnailImage3,
  },
  {
    gambar: thumbnailImage4,
  },
  {
    gambar: thumbnailImage5,
  },
];


const ThumbnailCarousel = () => {

    const mainCarousel = useRef(null);
  const thumbnailCarousel = useRef(null);

  useEffect(() => {
    if (mainCarousel.current && thumbnailCarousel.current) {
      mainCarousel.current.sync(thumbnailCarousel.current.splide);
    }
  }, []);

  return (
    <>
    <Splide
    id="main-carousel"
    ref={mainCarousel}
    options={{
      type: "fade",
      rewind: true,
      pagination: false,
      arrows: false,
      drag: false,
    }}
    className="mb-5"
  >
    {data.map((item, index) => (
      <SplideSlide key={index}>
        <img src={item.gambar} className="rounded-lg" alt="imageCarousel" />
      </SplideSlide>
    ))}
  </Splide>
  <Splide
    id="thumbnail-carousel"
    ref={thumbnailCarousel}
    options={{
      gap: 10,

      pagination: false,
      isNavigation: true,

      perPage: 4,
      breakpoints: {
        600: {
          fixedWidth: 60,
          fixedHeight: 44,
        },
      },
    }}
  >
    {data.map((item, index) => (
      <SplideSlide key={index}>
        <img src={item.gambar} className="rounded-lg" alt="thumbnailCarousel" />
      </SplideSlide>
    ))}
  </Splide>

  </>
  )
}

export default ThumbnailCarousel