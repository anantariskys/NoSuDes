import React from "react";


import pulauImage from "../../../public/Pulau.png";
import rumahAdatImage from "../../../public/rumahAdat.png";
import batikImage from "../../../public/batik.png";
import { SplideSlide,Splide } from "@splidejs/react-splide";


const Introduction = () => {
  return (
    <section className="font-Poppins flex flex-col gap-10 md:gap-16 items-center py-10 md:py-20  w-full bg-warning-500">
      <h1 className="text-sm md:text-4xl font-semibold text-primary-500">Udah Pernah Ke Sumatera Utara Belum?</h1>
      <Splide
        options={{
          focus: "center",
          perPage: 1,
          slideFocus: true,
          pagination: false,
          arrows: true,
          gap: "50px",
        
          breakpoints:{
            640: {
              padding: {
                right: "10px", 
                left: "10px", 
              },
              height:"50vh"
           
            },
            768: {
              padding: {
                right: "100px", 
                left: "100px", 
              },
              height:'25vw', 
            
            },
            2048:{
              padding: {
                right: "300px", 
                left: "300px", 
              },
              height:'25vw', 
            

            }
          },
         
          width:"100%"
        
        }}

       
     
        
      >
          <SplideSlide   >
          <div className="w-full h-full  mx-auto flex flex-col md:flex-row justify-center items-center py-5 px-6 gap-3 rounded-lg bg-secondary-500">
            <img src={pulauImage} className="md:w-1/2  aspect-video lg:aspect-auto w-full" alt="image" />
            <p className="text-baseColor-500 text-xs md:text-base font-Poppins leading-6 md:leading-9 text-justify ">
              Sumatera Utara merupakan provinsi yang memiliki berbagai macam objek wisata mulai dari wisata alam hingga bangunan bersejarah di perkotaan. Kota Medan yang menjadi ibu kota dari provinsi tersebut juga dinobatkan sebagai kota
              terbesar kedua di Indonesia setelah Surabaya.
            </p>
          </div>
           
          </SplideSlide>
          
         
          <SplideSlide  >
          <div className="w-full h-full flex flex-col-reverse md:flex-row justify-center items-center py-5 px-6 gap-3 rounded-lg bg-primary-50">
            <p className="text-secondary-500 text-xs md:text-base font-Poppins leading-7 md:leading-9 text-justify ">Gambar di samping adalah Rumah Adat dari suku Batak dari Sumatera Utara yang disebut <span className="bg-error-700 p-1 rounded-2xl">“Rumah Bolon”,</span>
              dan kamu bisa menemukannya di <span className="bg-error-700 p-1 rounded-2xl">Pulau Samosir!</span></p>
            <img src={rumahAdatImage} className="md:h-3/4 w-full" alt="image" />
          </div>
           
          </SplideSlide>
          <SplideSlide  >
            
          <div className="w-full h-full flex flex-col md:flex-row justify-center items-center py-5 px-6 gap-6 rounded-lg bg-secondary-500">
            <img src={batikImage} className="md:w-2/4 w-full" alt="image" />
            <p className="text-baseColor-500 text-xs md:text-base font-Poppins leading-7 md:leading-9 text-justify ">
              Mengenal Kain Ulos, salah satu warisan tak benda Indonesia yang berasal dari suku Batak, sebagai oleh - oleh yang bisa dipakai untuk acara apapun!
            </p>
          </div>
          </SplideSlide>
       
      </Splide>


   
    </section>
  );
};

export default Introduction;
