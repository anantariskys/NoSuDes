import { faPencil, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { TabItem } from "flowbite-react";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import image from "../../public/reviewHeader.png";
import ReviewCard from "../components/ReviewCard";
import { useAuth } from "../hooks/useAuth";

const Cerita = () => {
  const [filter, setFilter] = useState("Semua");
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [wisata, setWisata] = useState([]);
  const {isAuthenticated} = useAuth();

  useEffect(() => {
    console.log(filter);
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get("https://aws.dvnnfrr.my.id/reviews");
        let filteredData = response.data.data;

        if (filter === "Foto") {
          filteredData = filteredData.filter((item) => item.photo_url !== "");
        } else if (filter === "Ulasan") {
          filteredData = filteredData.filter((item) => item.photo_url === "");
        }

        setData(filteredData);
        setTimeout(() => {
          setIsLoading(false);
        }, 500);
      } catch (error) {
        setTimeout(() => {
          setIsLoading(false);
        }, 500);
        console.log(error);
      }
    };
    const fetchWisata = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get("https://aws.dvnnfrr.my.id/attractions");
       setWisata(response.data.data)
        setTimeout(() => {
          setIsLoading(false);
        }, 500);
      } catch (error) {
        setTimeout(() => {
          setIsLoading(false);
        }, 500);
        console.log(error);
      }
    };
    fetchWisata()

    fetchData();
  }, [filter]);

  const [reviewText, setReviewText] = useState("");
  const [photo, setPhoto] = useState("");
  const [selectedId,setSelectedId] = useState("")
  const navigate = useNavigate();

  const handleLike = async () => {
    try {
      const response = await axios.delete(
        `https://aws.dvnnfrr.my.id/reviews/likes/a874f6b6-a3e8-45e7-b4d1-33e396440660`,
        {},
        {
          headers: {
            Authorization: `Bearer : ${window.localStorage.getItem("token")}`,
          },
        }
      );
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };





  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsLoading(true);

    const formData = new FormData();
    formData.append("review_text", reviewText);
    
    if (photo) {
      formData.append("photo", photo);
    }

    if (!isAuthenticated) {
        navigate('/login')
    }

    try {
      const response = await axios.post(`https://aws.dvnnfrr.my.id/reviews/${selectedId}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer : ${window.localStorage.getItem("token")}`,
        },
      });
      console.log(response.data);
      setIsLoading(false);
    } catch (error) {
      console.log(error.response);
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-[#F1F1F1]">
      <header className="w-full h-[30vh] lg:h-[70vh] flex justify-center items-center">
        <div className="flex w-4/5 aspect-[16/5] mx-auto bg-[#86A6D3] rounded-lg relative ">
          <img loading="lazy" src={image} className="w-1/2 aspect-auto " alt="image" />
          <div className="h-full w-2/4 absolute left-0 top-0 bg-gradient-to-r to-[#86A6D3] from-transparent"></div>
          <div className="w-full h-full flex flex-col justify-center py-10 gap-12 items-center relative">
            <div className="h-full w-full absolute left-0 top-0 bg-gradient-to-r to-[#277BF2] from-[#86A6D3]"></div>
            <h4 className="text-xs md:text-2xl drop-shadow-2xl md::px-10 font-bold font-Poppins text-center  text-baseColor-500 z-20 relative">Traveler! Ayo Bagikan Ceritamu</h4>

            <input type="checkbox" id="my_modal_7" className="modal-toggle" />
            <div className="modal" role="dialog">
              <div className="modal-box">
                <form onSubmit={handleSubmit}>
                
                    <div className="form-control mb-5">
                      <div className="label">
                        <span className="label-text">Abis darimana?</span>
                      </div>
                      <select name="wisata" className="select-md select " value={selectedId} onChange={(e) => setSelectedId(e.target.value)}>
                        {wisata.map((item,index)=>(
                            <option value={item.id} >{item.name}</option>

                        ))}
                    
                      </select>
                    </div>
                    <div className="form-control mb-5">
                      <div className="label">
                        <span className="label-text">Tulis cerita anda</span>
                      </div>
                  <textarea className="textarea textarea-bordered textarea-lg w-full" value={reviewText} onChange={(e) => setReviewText(e.target.value)} />
                    
                    </div>
                  

                    <div className="form-control mb-5">
                      <div className="label">
                        <span className="label-text">Unggah momen anda</span>
                      </div>
                  <input type="file" onChange={(e) => setPhoto(e.target.files[0])} />
                    </div>
                    <div className="form-control ">
                  <button type="submit" className="btn bg-primary-500 text-baseColor-500 hover:bg-primary-300 duration-300 ease-in-out w-3/4 mx-auto " >
                    Kirim
                  </button>
                    
                    </div>

                </form>
              </div>
              <label className="modal-backdrop" htmlFor="my_modal_7">
                Close
              </label>
            </div>

            <label htmlFor="my_modal_7" className="input input-xs md:input-md  border-2 mx-auto w-full md:w-4/5  z-20  focus-within:border-base-200 focus-within:outline-none  rounded-2xl   text-primary-300 flex items-center md:gap-2">
              <FontAwesomeIcon icon={faPencil} />
              <p type="text" className="grow border-none w-full font-Poppins text-[0.625rem] lg:text-lg font-semibold ">
                Apa yang ingin kamu ceritakan?
              </p>
            </label>
          </div>
        </div>
      </header>
      <section className="w-full">
        <div className="w-4/5 mx-auto">
          <div className="text-sm breadcrumbs font-Poppins text-primary-500">
            <ul>
              <li>
                <Link to={"/"}>Beranda</Link>
              </li>
              <li>
                <Link to={"/cerita"}>Komunitas</Link>
              </li>
              <li>
                <a></a>
              </li>
            </ul>
          </div>
        </div>
        <section className="py-16">
          <label className="input border-2 mx-auto w-4/5 md:w-1/2 border-primary-500 rounded-2xl focus-within:border-primary-500 focus-within:outline-none text-primary-500 flex items-center gap-2">
            <FontAwesomeIcon icon={faSearch} />
            <input type="text" className="grow border-none focus:ring-0 focus:outline-none font-Poppins text-lg font-semibold placeholder-poppins " placeholder="Cari yang sesuai budget" />
          </label>
        </section>
        <div className="w-4/5 mx-auto">
          <h1 className="text-primary-500 font-semibold text-lg mb-5">Cerita Terbaru</h1>
          <div className="flex gap-3 mb-5">
            <div
              onClick={() => {
                setFilter("Semua");
              }}
              className={`${
                filter === "Semua" ? "bg-primary-500 text-baseColor-500" : "bg-baseColor-500 text-primary-500"
              } duration-500 ease-in-out transition-transform px-5 w-36 flex justify-center items-center rounded-lg py-2 border border-primary-500`}
            >
              Semua
            </div>
            <div
              onClick={() => {
                setFilter("Foto");
              }}
              className={`${
                filter === "Foto" ? "bg-primary-500 text-baseColor-500" : "bg-baseColor-500 text-primary-500"
              } duration-500 ease-in-out transition-transform px-5 w-36 flex justify-center items-center rounded-lg py-2 border border-primary-500`}
            >
              Foto
            </div>
            <div
              onClick={() => {
                setFilter("Ulasan");
              }}
              className={`${
                filter === "Ulasan" ? "bg-primary-500 text-baseColor-500" : "bg-baseColor-500 text-primary-500"
              } duration-500 ease-in-out transition-transform px-5 w-36 flex justify-center items-center rounded-lg py-2 border border-primary-500`}
            >
              Ulasan
            </div>
          </div>
        </div>
      </section>
      {isLoading ? (
        <div className="w-full h-[25vh] flex justify-center items-center">
          <span className="loading loading-dots loading-sm text-primary-500"></span>
        </div>
      ) : (
        <main className="w-full mx-auto px-10 py-20 flex flex-wrap    gap-5">
          {data.map((item, index) => (
            <div key={index}>
              <ReviewCard date={item.date_created} id={item.review_id} name={item.attraction_detail.name} photo={item.photo_url} review={item.review_text} username={item.user_detail.username} handleLike={handleLike}/>
            </div>
          ))}
        </main>
      )}
    </div>
  );
};

export default Cerita;
