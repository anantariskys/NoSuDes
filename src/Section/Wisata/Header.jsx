import { SplideSlide,Splide } from '@splidejs/react-splide'
import React from 'react'
import image1 from '../../../public/headerImage1.png'
import image2 from '../../../public/headerImage2.png'
import image3 from '../../../public/headerImage3.png'
import bg from '../../../public/bg-text.png'
const Header = () => {
  return (
    <Splide
    tag='header'
    options={{
 
      focus: "center",
      perPage: 1,
      pagination: true,
      arrows: true,
      gap: "50px",
      height:'70vh',
     
    }}
    
 
    
  >
      <SplideSlide className='py-10 '  >
      <div className="flex w-4/5 aspect-[16/5]  mx-auto  bg-warning-500 rounded-lg relative ">
        <div className="h-full w-3/5 absolute right-[49.5%] top-0 bg-gradient-to-r to-warning-500 from-transparent"></div>

        <img loading="lazy" src={image1} className="w-1/2 aspect-auto " alt="image" />

        <div className="w-2/5 mx-auto  flex flex-col justify-end py-10  gap-4 items-center relative">
          <h4 className="text-2xl px-10  font-bold font-Poppins self-start  text-baseColor-500 z-20 text-left relative "><img className='absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 -z-10 w-full aspect-auto ' src={bg} alt="bg" /> Eitss!</h4>
          <h4 className="text-2xl font-bold font-Poppins text-secondary-300 z-20 text-left ">Sudah sampai di Pulau Samosir, ngapain buru - buru pulang?</h4>
          <h4 className="text-2xl font-bold font-Poppins text-secondary-300 z-20 text-left ">Nikmati soremu di Tepi Coffee biar lebih afdol lagi nih!</h4>
          <button className="rounded-xl px-10 py-2 hover:bg-primary-300 self-end duration-300 ease-in-out bg-primary-500 font-semibold font-Poppins z-20 text-baseColor-300">Lebih Detail</button>
        </div>
      </div>
       
      </SplideSlide>
      
     
      <SplideSlide className='py-10'   >
      <div className="flex flex-row-reverse w-4/5  mx-auto aspect-[16/5] bg-success-300 rounded-lg relative ">
        <div className="h-full w-3/5 absolute left-[49.5%] top-0 bg-gradient-to-r from-success-300 to-transparent"></div>

        <img loading="lazy" src={image2} className="w-1/2 aspect-auto " alt="image" />

        <div className="w-2/5 mx-auto  flex flex-col justify-end py-10 gap-4 items-center relative">
          <h4 className="text-3xl drop-shadow-2xl  font-bold font-Poppins self-start  text-baseColor-500 z-20 text-left relative ">Puncak Berkabut?!</h4>
          <h4 className="text-2xl font-bold font-Poppins text-primary-500 z-20 text-left ">Cobain Wisata Hidden - gem yang ada di Berastagi</h4>
          <h4 className="text-2xl font-bold font-Poppins text-primary-500 z-20 text-left ">Suasana yang sejuk dijamin bikin betah, deh!</h4>
          <button className="rounded-xl px-10 py-2 hover:bg-primary-300 self-end duration-300 ease-in-out bg-primary-500 font-semibold font-Poppins z-20 text-baseColor-300">Lebih Detail</button>
        </div>
      </div>
       
      </SplideSlide>
      <SplideSlide className='py-10'  >
      <div className="flex w-4/5 aspect-[16/5]  mx-auto  bg-error-300 rounded-lg relative ">
        <div className="h-full w-3/5 absolute right-[49.5%] top-0 bg-gradient-to-r to-error-300 from-transparent"></div>

        <img loading="lazy" src={image3} className="w-1/2 aspect-auto " alt="image" />

        <div className="w-2/5 mx-auto  flex flex-col justify-end py-10 gap-7 items-center relative">
          <h4 className="text-xl font-bold font-Poppins text-baseColor-500 z-20 text-left ">Kenalin nih, Makanan khas Batak namanya <span className='bg-warning-700 px-2 py-1 rounded-lg'>Mie Gomak</span></h4>
          <h4 className="text-xl font-bold font-Poppins text-baseColor-500 z-20 text-left ">Katanya  Rumah Makan Khas Batak Parna Menyediakan Mie Gomak terenak, lho~</h4>
          <button className="rounded-xl px-10 py-2 hover:bg-primary-300 self-end duration-300 ease-in-out bg-primary-500 font-semibold font-Poppins z-20 text-baseColor-300">Lebih Detail</button>
        </div>
      </div>
       
      </SplideSlide>
     
   
  </Splide>

  )
}

export default Header