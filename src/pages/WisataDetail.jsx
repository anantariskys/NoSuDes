import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";

import Detail from "../Section/DetailWisata/Detail";
import Rekomendasi from "../Section/DetailWisata/Rekomendasi";

import Review from "../Section/DetailWisata/Review";
import WisataTerdekat from "../Section/DetailWisata/WisataTerdekat";

const WisataDetail = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get(`https://aws.dvnnfrr.my.id/attractions/${id}`);
        setData(response.data.data);
      } catch (error) {
        console.log(error);
      }
      setTimeout(() => {
        setIsLoading(false);
      }, 500);
    };
    fetchData();
  }, [id]);

 

  return (
    <div className="bg-[#f1f1f1] pt-10 pb-24">
      <div className="text-sm ms-20 mb-20 breadcrumbs text-primary-500">
        <ul>
          <li>
            <Link to={"/"}>Beranda</Link>
          </li>
          <li>
            <Link to={"/wisata"}>Wisata</Link>
          </li>
          {data && <li>{data.name}</li>}
        </ul>
      </div>
      {data && (
        <>
          <h1 className="text-5xl font-Poppins w-5/6 mx-auto mb-7 text-primary-500 font-bold">{data.name}</h1>
          <Detail data={data} />
        </>
      )}
      <Review id={id} />
      <Rekomendasi />

      <WisataTerdekat />
    </div>
  );
};

export default WisataDetail;
