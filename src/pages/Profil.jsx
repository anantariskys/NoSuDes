import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import React, { useEffect, useState } from "react";

const Profil = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [active,setActive] = useState('Personal')

  useEffect(() => {
    const fetchData = async () => {
      const token = window.localStorage.getItem("token");
      console.log(token);
      try {
        const response = await axios.get(`https://aws.dvnnfrr.my.id/users/profile`, {
          headers: {
            Authorization: `Bearer : ${token}`,
          },
        });
        setData(response.data.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.response);
      }
    };
    fetchData();
  }, []);


  console.log(data)

  return (
    <div className="bg-[#F1F1F1] font-Poppins">
      {isLoading ? (
      <div className="w-full h-[60vh] flex justify-center items-center">
      <span className="loading loading-dots loading-lg text-primary-500"></span>
    </div>
      ) : (
        <>
          {" "}
          <header className="w-full h-[60vh] relative">
            <img src="https://source.unsplash.com/random/1200x400" className="w-full h-full object-cover" alt="bg" />
           {
            data.photo_profile===""?(
                <div src="" className="absolute -bottom-20 left-[8.5vw] h-44 bg-white flex justify-center items-center aspect-square rounded-full" alt="profile">
                    <FontAwesomeIcon className="text-black" size="2x" icon={faUser}/>
                </div>
                ):(
                <img src={data.photo_profile} className="absolute h-44 aspect-square rounded-full" alt="profile" />
            )
           }
           <h3 className="text-3xl font-semibold absolute  text-primary-500 -bottom-10 left-[25vw]">{data.fullname}</h3>
           <p className="text-lg font-semibold absolute  text-primary-300 -bottom-20 left-[25vw]">@{data.username}</p>
          </header>
          <section className="w-4/5 mx-auto  py-32">
            <div className="flex gap-10 mb-5">
                <div className="flex flex-col justify-center items-center">
                    <h3 className="font-semibold text-lg text-primary-500">{data.total_reviews}</h3>
                    <p className="text-sm text-primary-300">Review</p>
                </div>
                <div className="flex flex-col justify-center items-center">
                    <h3 className="font-semibold text-lg text-primary-500">{data.total_likes}</h3>
                    <p className="text-sm text-primary-300">Suka</p>
                </div>
            </div>
            <main className="w-full flex gap-5">
                <aside className="w-1/5 bg-base-100 rounded-xl border py-10 px-5 flex flex-col gap-5 justify-between  border-neutral-500">
                    <div  onClick={()=>{setActive('Personal')}} className={`${active==="Personal"?'bg-primary-500 text-baseColor-500  ':'text-primary-300 '}duration-300 ease-in-out transition-transform font-semibold  text-lg py-1 px-3 rounded-xl`}>
                        Personal Info
                    </div>
                    <div  onClick={()=>{setActive('Bookmark')}} className={`${active==="Bookmark"?'bg-primary-500 text-baseColor-500  ':'text-primary-300 '}duration-300 ease-in-out transition-transform font-semibold  text-lg py-1 px-3 rounded-xl`}>
                        Bookmark
                    </div>
                    <div  onClick={()=>{setActive('Cerita')}} className={`${active==="Cerita"?'bg-primary-500 text-baseColor-500  ':'text-primary-300 '}duration-300 ease-in-out transition-transform font-semibold  text-lg py-1 px-3 rounded-xl`}>
                        Cerita
                    </div>
                    <div  onClick={()=>{setActive('Keamanan')}} className={`${active==="Keamanan"?'bg-primary-500 text-baseColor-500  ':'text-primary-300 '}duration-300 ease-in-out transition-transform font-semibold  text-lg py-1 px-3 rounded-xl`}>
                        Keamanan Akun
                    </div>
                </aside>
                <div className="w-4/5 bg-base-100  border border-neutral-500">
                     2
                </div>

            </main>
          </section>
        </>
      )}
    </div>
  );
};

export default Profil;
