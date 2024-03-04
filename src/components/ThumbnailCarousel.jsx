import { Splide, SplideSlide } from '@splidejs/react-splide'
import { useEffect, useRef } from 'react';

import thumbnailImage1 from "../../public/thumbnailCarousel1.png";
import thumbnailImage2 from "../../public/thumbnailCarousel2.png";
import thumbnailImage3 from "../../public/thumbnailCarousel3.png";
import thumbnailImage4 from "../../public/thumbnailCarousel4.png";
import thumbnailImage5 from "../../public/thumbnailCarousel5.png";




const ThumbnailCarousel = ({attraction_photos}) => {



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
    {
      attraction_photos&&(
        attraction_photos.map((item, index) => (
          <SplideSlide key={index}>
            <img src={item.photo_url} className="rounded-lg w-full aspect-[5/3] object-cover" alt="imageCarousel" />
          </SplideSlide>
        ))
      )
    }
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
    {
      attraction_photos&&(
        attraction_photos.map((item, index) => (
          <SplideSlide key={index}>
            <img src={item.photo_url} className="rounded-lg w-full aspect-[5/3]" alt="thumbnailCarousel" />
          </SplideSlide>
        ))
      )
    }
  </Splide>

  </>
  )
}

export default ThumbnailCarousel