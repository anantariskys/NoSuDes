
import React from "react";

import HeroCarousel from "../components/HeroCarousel";

import Favorite from "../Section/HomePage/Favorite";
import Introduction from "../Section/HomePage/Introduction";
import Kategori from "../Section/HomePage/Kategori";
import Kegiatan from "../Section/HomePage/Kegiatan";
import Promosi from "../Section/HomePage/Promosi";
import Recomendation from "../Section/HomePage/Recomendation";
import Review from "../Section/HomePage/Review";

const Home = () => {
  return (
    <div className="bg-[#f1f1f1]">
     
      <HeroCarousel/>
      <div className="h-10 md:h-20 lg:h-44 w-full bg-[#F1F1F1]"></div>
      <Introduction/>
      <Favorite/>
      <Kategori/>
      <Kegiatan/>
      <Review/>
      <Recomendation/>
      <Promosi/>
 

    </div>
  );
};

export default Home;
