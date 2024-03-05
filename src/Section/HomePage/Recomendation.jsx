import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SplideSlide, Splide } from "@splidejs/react-splide";
import { Link } from "react-router-dom";
import artikelImage from "../../../public/artikel.png";

const data = [
  {
    judul: "Kenali Tradisi Hombo Batu di Desa Buaya",
  },
  {
    judul: "Cobain kafe di pinggir Danau Toba, yuk!",
  },
  {
    judul: "5 Rekomendasi Wisata di Sumatera Utara under 100rb!",
  },
  {
    judul: "7 Kegiatan Outdoor paling populer di Sumatera Utara",
  },
  {
    judul: "Yuk cobain asyiknya Paralayang!",
  },
  {
    judul: "Kenali Tradisi Hombo Batu di Desa Buaya",
  },
  {
    judul: "Cobain kafe di pinggir Danau Toba, yuk!",
  },
  {
    judul: "5 Rekomendasi Wisata di Sumatera Utara under 100rb!",
  },
  {
    judul: "7 Kegiatan Outdoor paling populer di Sumatera Utara",
  },
  {
    judul: "Yuk cobain asyiknya Paralayang!",
  },
];

const Recomendation = () => {
  return (
    <div className="w-full pb-10 md:pb-20 ">
      <h1 className="font-bold text-sm md:text-4xl mb-10 md:mb-28 text-primary-500 font-Poppins text-center">Jalan - jalan, Yuk!</h1>
      <Splide
        options={{
          preloadPages: 2,
        
          rewind: true,
          focus: "center",
          pagination: false,
          padding: "10px",
          perMove: 1,
          arrows: false,
          gap: "15px",
          breakpoints:{
            640: {
              perPage: 2,
              padding: {
                right: "10px", 
                left: "10px", 
              },    
                
            },
            768: {
              perPage: 3,
              padding: {
                right: "50px", 
                left: "50px", 
              },
              
        
            
            },
            2048:{
              perPage: 5,
              padding: {
                right: "50px", 
                left: "50px", 
              },
              
            }}
        }}
        
      >
        {data.map((item,index) => (
          <SplideSlide key={index} >
            <div className="card w-full aspect-[4/5] bg-base-100 relative " style={{ backgroundImage: `url(${artikelImage})`, backgroundSize: "contain" }}>
              <div className="w-full h-1/4 px-3 items-center absolute font-Poppins rounded-b-xl text-primary-500 bg-neutral-300 bottom-0 left-0 opacity-75 flex">
                <h3 className="w-5/6  font-semibold text-xs md:text-sm ">{item.judul}</h3>
                
                <FontAwesomeIcon icon={faArrowRight} className='hidden lg:block' size='2x'/>
                <FontAwesomeIcon icon={faArrowRight} className='lg:hidden block' size='1x'/>


              </div>
            </div>
          </SplideSlide>
        ))}
      </Splide>
     <Link to={'/artikel'}><p className="font-Poppins text-sm md:text-lg font-semibold text-primary-500 md:mt-20 mt-10 text-right px-5 md:px-28">Lihat Semua <span><FontAwesomeIcon icon={faArrowRight}/></span></p>
     </Link>
    </div>
  );
};

export default Recomendation;
