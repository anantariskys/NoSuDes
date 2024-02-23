import React from "react";
import { Link } from "react-router-dom";
import Detail from "../Section/DetailWisata/Detail";

const WisataDetail = () => {
  return (
    <div className="bg-[#f1f1f1] py-10">
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
      <Detail/>
    </div>
  );
};

export default WisataDetail;
