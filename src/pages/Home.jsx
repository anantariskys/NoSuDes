
import React from "react";
import Footer from "../components/fragments/Footer";
import HeroCarousel from "../components/fragments/HeroCarousel";
import Navbar from "../components/fragments/Navbar";
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
      <div className="h-44 w-full bg-[#F1F1F1]"></div>
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
