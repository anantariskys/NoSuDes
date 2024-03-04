import { useEffect, useState } from "react";
import { faBookmark } from "@fortawesome/free-regular-svg-icons";
import { faBookmark as faBookMarkSolid, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import image from "./../../public/aktivitasHeader.png";
import Search from "../Section/Wisata/Search";
import { Link, useParams } from "react-router-dom";

const data = [
  {
    id: 1,
    nama: "Danau Toba",
  },
  {
    id: 2,
    nama: "Pulau Samosir",
  },
  {
    id: 3,
    nama: "Bukit Lawang",
  },
  {
    id: 4,
    nama: "Taman Simalem Resort",
  },
  {
    id: 5,
    nama: "Air Terjun Sipiso-piso",
  },
  {
    id: 6,
    nama: "Pulau Nias",
  },
  {
    id: 7,
    nama: "Pantai Parbaba",
  },
  {
    id: 8,
    nama: "Taman Alam Lumbini",
  },
  {
    id: 9,
    nama: "Pulau Weh",
  },
  {
    id: 10,
    nama: "Kawah Putih",
  },
  {
    id: 11,
    nama: "Pulau Sabang",
  },
  {
    id: 12,
    nama: "Bukit Indah Simarjarunjung",
  },
];

const AktivitasList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  const kategori =   useParams();

  const paginate = (pageNumber) => {
    if (pageNumber < 1 || pageNumber > Math.ceil(data.length / itemsPerPage)) {
      return;
    }
    setCurrentPage(pageNumber);
  };

  const [message, setMessage] = useState('');
  useEffect(() => {
    if (kategori.kategori === "alam") setMessage("Ayo Berpetualang di Alam");
    else if (kategori.kategori === "perkotaan") setMessage("Jalan - jalan di kota juga seru!");
    else if (kategori.kategori === "kuliner") setMessage("Laper? Ayo cobain kuliner di Sumut!");
  }, [kategori]);



  return (
    <div className="bg-[#f1f1f1]">
       <header className="w-full h-[70vh] flex justify-center items-center">
        <div className="flex w-4/5 aspect-[16/5] mx-auto bg-[neutral-300] rounded-lg relative ">
          <div className="w-full h-full flex justify-center py-10 gap-4 items-center relative">
            <div className="h-full w-full absolute left-0 top-0 bg-gradient-to-l to-[#4D88DC] from-[#CBD5E1]"></div>
            <h4 className="text-2xl drop-shadow-2xl px-10 font-bold font-Poppins text-center w-4/5 text-baseColor-500 z-20 relative">Temukan Aktivitas Yang Sesuai Gayamu</h4>
          </div>
          <div className="h-full w-2/4 absolute right-0 top-0 bg-gradient-to-l to-[#CBD5E1] from-transparent"></div>

          <img loading="lazy" src={image} className="w-1/2 aspect-auto " alt="image" />
        </div>
      </header>
      <div className="w-4/5 mx-auto">
      <div className="text-sm breadcrumbs font-Poppins text-primary-500">
          <ul>
            <li>
              <Link to={"/"}>Beranda</Link>
            </li>
            <li>
              <Link to={"/aktivitas"}>Aktivitas</Link>
            </li>
            <li>
              <a >{kategori.kategori}</a>
            </li>
          </ul>
        </div>
        </div>
      <Search />
      <section className="font-Poppins px-24 ppb-20 pt-10">
        <h4 className="text-2xl text-primary-500 font-bold mb-10 ms-4">{message}</h4>
        <div className="w-full flex">
          <aside className=" w-1/4">
            <ul className="menu text-lg  w-full  text-primary-500">
              <h5 className="font-bold">Filter</h5>
              <hr className="border-primary-500" />
              
              <li>
                <details>
                  <summary className="font-bold">Harga</summary>
                  <ul>
                    <li>
                      <a> &lt; 200 rb</a>
                    </li>
                    <li>
                      <a>200 rb - 500 rb</a>
                    </li>
                    <li>
                      <a>500 rb - 1 juta</a>
                    </li>
                    <li>
                      <a>1 juta - 2 juta</a>
                    </li>
                    <li>
                      <a>&gt; 3 juta</a>
                    </li>
                  </ul>
                </details>
              </li>
              <hr className="border-primary-500 w-[95%] ms-auto" />
              <li>
                <a className="font-bold">Jarak Terdekat</a>
              </li>
            </ul>
          </aside>
          <main className=" w-3/4 gap-12 pb-5 flex flex-col items-center">
            {currentItems.map((item, index) => (
              <div key={index} className="card font-Poppins card-compact   card-side bg-base-100 w-[90%] shadow-xl">
                <figure className="w-2/5 aspect-square">
                  <img src="https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg" alt="Movie" />
                </figure>
                <div className="card-body w-3/5">
                  <div className="flex justify-between">
                    <h2 className="card-title font-semibold text-2xl text-primary-500">{item.nama}</h2>
                    <label className="swap">
                      <input type="checkbox" className="hidden" />
                      <FontAwesomeIcon className="swap-off fill-current text-primary-500" size="2x" icon={faBookmark} />
                      <FontAwesomeIcon className="swap-on fill-current text-primary-500" size="2x" icon={faBookMarkSolid} />
                    </label>
                  </div>
                  <div className="flex gap-2 items-center">
                    <FontAwesomeIcon icon={faLocationDot}/>
                    <p className='text-secondary-300 text-sm'>ini nama daerah</p>
                  </div>
                 <p className="text-lg font-semibold text-primary-500">
                 Mumpung lagi di Medan, ayo cobain soto khas Kesawan dengan campuran udang dan kuah santan yang berempah!
                 </p>
                 
                
                
                  <div className="card-actions  justify-end  ">
                    <button className="btn bg-primary-500 text-sm font-semibold text-baseColor-500 px-12 py-1">Lebih Detail</button>
                  </div>
                </div>
              </div>
            ))}
            <div className="join">
              <button className="join-item btn" onClick={() => paginate(currentPage - 1)} disabled={currentPage === 1}>
                Prev
              </button>
              {Array.from({ length: Math.ceil(data.length / itemsPerPage) }, (_, i) => (
                <button key={i} className="join-item btn" onClick={() => paginate(i + 1)}>{i + 1}</button>
              ))}
              <button className="join-item btn" onClick={() => paginate(currentPage + 1)} disabled={currentPage === Math.ceil(data.length / itemsPerPage)}>
                Next
              </button>
            </div>
          </main>
        </div>
      </section>
    </div>
  );
};

export default AktivitasList;
