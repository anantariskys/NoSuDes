import React from "react";
import promosiImage from "../../../public/promosi.png";
const Promosi = () => {
  return (
    <div className="w-full pb-10 lg:h-[70vh] flex justify-center items-center">
      <div className="flex w-4/5  mx-auto  bg-[#FAE7C3] rounded-lg relative ">
        <div className="h-full w-3/5 absolute right-left top-0 bg-gradient-to-r to-[#FAE7C3] from-transparent"></div>

        <img loading="lazy" src={promosiImage} className="w-3/5 aspect-auto " alt="image" />

        <div className="w-2/5 flex flex-col justify-center gap-1 md:gap-7 items-center relative">
          <div className="h-full w-1/2 absolute right-0 top-0 bg-gradient-to-l from-[#FFDD9E] to-transparent"></div>
          <h1 className="text-[0.625rem] md:text-2xl font-bold font-Poppins text-primary-500 z-20 text-center">Sudah Siap Bagikan Ceritamu?</h1>
          <button className="btn btn-xs md:btn-sm text-[0.500rem] md:text-base px-5  md:px-10  hover:bg-primary-300 duration-300 ease-in-out bg-primary-500 font-semibold font-Poppins z-20 text-baseColor-300">Buat Akun</button>
        </div>
      </div>
    </div>
  );
};

export default Promosi;
