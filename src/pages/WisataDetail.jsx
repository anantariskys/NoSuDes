import React from "react";
import { Link } from "react-router-dom";
import Detail from "../Section/DetailWisata/Detail";
import Rekomendasi from "../Section/DetailWisata/Rekomendasi";

import Review from "../Section/DetailWisata/Review";
import WisataTerdekat from "../Section/DetailWisata/WisataTerdekat";

const WisataDetail = () => {
  return (
    <div className="bg-[#f1f1f1] pt-10 pb-24">
      <div className="text-sm ms-20 mb-20 breadcrumbs text-primary-500">
        <ul>
          <li>
            <Link to={'/'}>Beranda</Link>
          </li>
          <li>
            <Link to={'/wisata'}>Wisata</Link>
          </li>
          <li>Danau Toba</li>
        </ul>
      </div>
      <h1 className="text-5xl font-Poppins w-5/6 mx-auto mb-7 text-primary-500 font-bold">Danau Toba</h1>
      <Detail/>
      <Review/>
      <Rekomendasi/>

      <WisataTerdekat/>
    </div>
  );
};

export default WisataDetail;
