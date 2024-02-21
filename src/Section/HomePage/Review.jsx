import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import bukitImage from "../../../public/bukit.png";
import "@splidejs/react-splide/css";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faArrowRight, faHeart as faHeartSolid, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const data = [
  {
    id: 1,
    nama: "Aktivitas di Alam",
  },
  {
    id: 2,
    nama: "Aktivitas di Kota",
  },
  {
    id: 3,
    nama: "Kuliner",
  },
  {
    id: 4,
    nama: "Kuliner",
  },
  {
    id: 5,
    nama: "Kuliner",
  },
  {
    id: 6,
    nama: "Kuliner",
  },
];

const Review = () => {
  return (
    <div className="w-full">
      <h1 className="font-bold text-4xl mb-28 text-primary-500 font-Poppins text-center">Lihat Review Traveler Lain</h1>
      <Splide
        options={{
          preloadPages: 2,
          perPage: 4,
          rewind: true,

          pagination: false,
          padding: "10px",
          perMove: 1,
          arrows: false,
          gap: "30px",
        }}
        
      >
        {data.map((item) => (
          <SplideSlide key={item.id} className="">
            <div className="card card-compact w-full bg-baseColor-500">
              <figure className="relative">
                <label className="swap absolute top-2 right-2 h-14 aspect-square rounded-full bg-neutral-100">
                  <input type="checkbox" className="hidden" />

                  <FontAwesomeIcon className="swap-off fill-current text-error-700" size="2x" icon={faHeart} />

                  <FontAwesomeIcon className="swap-on fill-current text-error-700" size="2x" icon={faHeartSolid} />
                </label>
                <img src={bukitImage} className="w-full object-cover aspect-square" alt="Shoes" />
              </figure>
              <div className="card-body font-Poppins text-secondary-300">
                <div className="flex justify-between ">
                  <div className="flex justify-start w-1/2 items-center gap-2">
                    <img className="rounded-full w-1/5 aspect-square " src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                    <p>bagus771</p>
                  </div>
                  <div className="flex   items-center  gap-2">
                    <FontAwesomeIcon size="1x" icon={faLocationDot} />
                    <p className="w-full">Bukit Holbung</p>
                  </div>
                </div>
                <p>Pengalaman yang menyenangkan banget! ga pernah bosen kesana</p>
                <p>13/02/2024</p>
              </div>
            </div>
          </SplideSlide>
        ))}
      </Splide>
      <p className="font-Poppins  text-lg font-semibold text-primary-500 mt-20 text-right px-28">Bagikan Ceritamu Juga <span><FontAwesomeIcon icon={faArrowRight}/></span></p>
      <hr className="border-secondary-500 w-[90%] mx-auto mt-20 mb-20" />
    </div>
  );
};

export default Review;