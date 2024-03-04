import { faFacebook, faInstagram, faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { faHeart as faHeartSolid } from "@fortawesome/free-regular-svg-icons";
import { faArrowRight, faHeart, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


import React, { useEffect } from "react";
import HeroCarousel from "../components/HeroCarousel";
import artikelImage from "../../public/artikel.png";
import { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Rekomendasi from "../Section/ArtikelDetail/Rekomendasi";



const ArtikelDetail = () => {
  const {id} = useParams();
  const [data,setData] = useState([]);
  const [isLoading,setIsLoading] = useState(true);
  useEffect(() => {
      window.scrollTo(0, 0)

      const fetchData =async()=>{
        try {
          setIsLoading(true)
          const response = await axios.get(`https://aws.dvnnfrr.my.id/articles/${id}`)
          console.log(response.data.data)
          setData(response.data.data)
          setTimeout(() => {
            setIsLoading(false)
          }, 500);
        } catch (error) {
          console.log(error)
        }
      }
      fetchData()
  }, [id])
  return (
    <div>
      <HeroCarousel />
      <main className="flex w-4/5 mx-auto py-28 font-Poppins">
        <article className="w-3/5">
          {
            data&&(
              <h3 className="text-3xl font-semibold text-primary-500 mb-3">{data.title}</h3>
            )
          }
          <p className="text-primary-500  ">{new Date(data.created_at).toLocaleDateString("id-ID", { day: "2-digit", month: "2-digit", year: "numeric" })}</p>
          <img src={data.photo} className='mb-16' alt="" />
          <p className="text-xl text-primary-500">
            {data.description}
          </p>
        

          <hr className="border-primary-500 mb-10 mt-10" />
          <div className="flex justify-between ">
            <div className="flex gap-5 items-center">
              <label className="swap  h-14 aspect-square ">
                <input type="checkbox" className="hidden" />

                <FontAwesomeIcon className="swap-off fill-current text-error-700" icon={faHeart} />

                <FontAwesomeIcon className="swap-on fill-current text-error-700" icon={faHeartSolid} />
              </label>
              <p>Suka artikel di atas?</p>
            </div>
            <div className="flex gap-5 items-center  text-primary-500 ">
              <FontAwesomeIcon size="2x" icon={faInstagram} />
              <FontAwesomeIcon size="2x" icon={faFacebook} />
              <FontAwesomeIcon size="2x" icon={faXTwitter} />
              <FontAwesomeIcon size="2x" icon={faPhone} />
            </div>
          </div>
          <hr className="border-primary-500 mt-10" />
        </article>
        <aside className="w-2/5 ">
          <section className="w-5/6 bg-secondary-50 ms-auto rounded-lg px-6 py-10">
            <h5 className="text-lg font-semibold text-baseColor-500 mb-10">Related Post</h5>
           <div className="w-full px-8 flex flex-col gap-10">
           <div className="card w-full shadow-xl aspect-[4/4] bg-base-100 relative " style={{ backgroundImage: `url(${artikelImage})`, backgroundSize: "cover" }}>
              <div className="w-full h-1/4 px-3 items-center absolute font-Poppins rounded-b-xl text-primary-500 bg-neutral-300 bottom-0 left-0 opacity-75 flex">
                <h3 className="w-5/6  font-semibold text-sm "></h3>
                <FontAwesomeIcon icon={faArrowRight} size="2x" />
              </div>
            </div>
           <div className="card w-full shadow-xl aspect-[4/4] bg-base-100 relative " style={{ backgroundImage: `url(${artikelImage})`, backgroundSize: "cover" }}>
              <div className="w-full h-1/4 px-3 items-center absolute font-Poppins rounded-b-xl text-primary-500 bg-neutral-300 bottom-0 left-0 opacity-75 flex">
                <h3 className="w-5/6  font-semibold text-sm "></h3>
                <FontAwesomeIcon icon={faArrowRight} size="2x" />
              </div>
            </div>
           <div className="card w-full shadow-xl aspect-[4/4] bg-base-100 relative " style={{ backgroundImage: `url(${artikelImage})`, backgroundSize: "cover" }}>
              <div className="w-full h-1/4 px-3 items-center absolute font-Poppins rounded-b-xl text-primary-500 bg-neutral-300 bottom-0 left-0 opacity-75 flex">
                <h3 className="w-5/6  font-semibold text-sm "></h3>
                <FontAwesomeIcon icon={faArrowRight} size="2x" />
              </div>
            </div>
           </div>
          </section>
        </aside>
      </main>
      <Rekomendasi id={id}/>
    
    </div>
  );
};

export default ArtikelDetail;
