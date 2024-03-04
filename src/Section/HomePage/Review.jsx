import { Splide, SplideSlide } from "@splidejs/react-splide";
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
    <section className="w-full">
      <h1 className="font-bold text-sm md:text-4xl mb-10 md:mb-28 text-primary-500 font-Poppins text-center">Lihat Review Traveler Lain</h1>
      <Splide
        options={{
          preloadPages: 2,
         
          rewind: true,
          pagination: false,
          perMove: 1,
          arrows: false,
       
       
          breakpoints:{
            640: {
              perPage: 2,
              padding: {
                right: "10px", 
                left: "10px", 
              },    
              gap: "15px",  
            },
            768: {
              perPage: 3,
              padding: {
                right: "100px", 
                left: "100px", 
              },
              gap: "25px",
        
            
            },
            2048:{
              perPage: 4,
              padding: {
                right: "100px", 
                left: "100px", 
              },
              gap: "30px",
            }}
          
          
        }}
        
      >
        {data.map((item) => (
          <SplideSlide key={item.id}>
            <div className="card card-compact  rounded-md bg-baseColor-500">
              <figure className="relative">
                <label className="swap absolute top-2 right-2 h-7 lg:h-14 aspect-square rounded-full bg-neutral-100">
                  <input type="checkbox" className="hidden" />

                  <FontAwesomeIcon className="lg:block hidden swap-off fill-current text-error-700" size="2x" icon={faHeart} />
                  <FontAwesomeIcon className="block lg:hidden swap-off fill-current text-error-700"  icon={faHeart} />

                  <FontAwesomeIcon className="lg:block hidden swap-on fill-current text-error-700" size="2x" icon={faHeartSolid} />
                  <FontAwesomeIcon className="block lg:hidden swap-on fill-current text-error-700"  icon={faHeartSolid} />
                </label>
                <img src={bukitImage} className="w-full object-cover aspect-square" alt="Shoes" />
              </figure>
              <div className="card-body font-Poppins text-secondary-300">
                <div className="flex flex-col lg:flex-row justify-between gap-3 md:gap-5 lg:gap-0 ">
                  <div className="flex justify-start w-1/2 items-center gap-1 md:gap-2">
                    <img className="rounded-full w-2/5 lg:w-1/5 aspect-square " src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                    <p className="text-xs   lg:text-base">bagus771</p>
                  </div>
                  <div className="flex  items-center gap-1 md:gap-2">
                    <FontAwesomeIcon size="1x" icon={faLocationDot} />
                    <p className="w-full text-xs   lg:text-base">Bukit Holbung</p>
                  </div>
                </div>
                <p className="text-xs md:text-sm  lg:text-base">Pengalaman yang menyenangkan banget! ga pernah bosen kesana</p>
                <p className="text-xs md:text-sm  lg:text-base">13/02/2024</p>
              </div>
            </div>
          </SplideSlide>
        ))}
      </Splide>
      <p className="font-Poppins text-sm md:text-lg font-semibold text-primary-500 md:mt-20 mt-10 text-right px-5 md:px-28">Bagikan Ceritamu Juga <span><FontAwesomeIcon icon={faArrowRight}/></span></p>
      <hr className="border-secondary-500 w-[90%] mx-auto md:mt-20 mt-10 md:mb-20 mb-10" />
    </section>
  );
};

export default Review;
