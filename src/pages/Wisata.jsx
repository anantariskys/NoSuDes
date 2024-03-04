import { useState, useEffect } from "react";
import { faBookmark } from "@fortawesome/free-regular-svg-icons";
import { faBookmark as faBookMarkSolid } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Header from "../Section/Wisata/Header";
import Search from "../Section/Wisata/Search";
import axios from "axios";
import { Link } from "react-router-dom";

const Wisata = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get("https://aws.dvnnfrr.my.id/attractions");
        setData(response.data.data);
      } catch (error) {
        console.log(error);
      }
      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
    };
    fetchData();
  }, []);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.length > 0 ? data.slice(indexOfFirstItem, indexOfLastItem) : [];

  const paginate = (pageNumber) => {
    if (pageNumber < 1 || pageNumber > Math.ceil(data.length / itemsPerPage)) {
      return;
    }
    setCurrentPage(pageNumber);
  };

  return (
    <div className="bg-[#f1f1f1]">
      <Header />
      <Search />
      <section className="font-Poppins px-24 ppb-20 pt-10">
        <h4 className="text-2xl text-primary-500 font-bold mb-10 ms-4">Telusuri Tempat - Tempat Wisata di Sumatera Utara</h4>
        <div className="w-full flex">
          <aside className=" w-1/4">
            <ul className="menu text-lg  w-full  text-primary-500">
              <h5 className="font-bold">Filter</h5>
              <hr className="border-primary-500" />
              <li>
                <details>
                  <summary className="font-bold">Kategori</summary>
                  <ul>
                    <li>
                      <a>Pantai & Laut</a>
                    </li>
                    <li>
                      <a>Alam & Pegunungan</a>
                    </li>
                    <li>
                      <a>Taman Rekreasi</a>
                    </li>
                    <li>
                      <a>Tempat Bersejarah</a>
                    </li>
                  </ul>
                </details>
              </li>
              <hr className="border-primary-500 w-[95%] ms-auto" />
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
              <div key={index} className="card font-Poppins h-80 w-[90%] card-compact card-side bg-base-100 shadow-xl">
                {!isLoading && item && item.attraction_photos && item.attraction_photos.length > 0 && (
                  <figure className="w-2/5 aspect-square ">
                    <img src={`${item.attraction_photos[0].photo_url}`} className=' object-cover h-full w-full' alt="Movie" />
                  </figure>
                )}
                <div className="card-body">
                  <div className="flex justify-between">
                    {item && item.name && (
                      <h2 className="card-title font-semibold text-2xl text-primary-500">{item.name}</h2>
                    )}
                    <label className="swap">
                      <input type="checkbox" className="hidden" />
                      <FontAwesomeIcon className="swap-off fill-current text-primary-500" size="2x" icon={faBookmark} />
                      <FontAwesomeIcon className="swap-on fill-current text-primary-500" size="2x" icon={faBookMarkSolid} />
                    </label>
                  </div>
                  <div className="flex gap-1 mt-4 mb-6">
                    <div className="mask mask-star h-6 aspect-square bg-warning-700"></div>
                    <div className="mask mask-star h-6 aspect-square bg-warning-700"></div>
                    <div className="mask mask-star h-6 aspect-square bg-warning-700"></div>
                    <div className="mask mask-star h-6 aspect-square bg-warning-700"></div>
                    <div className="mask mask-star h-6 aspect-square bg-warning-700"></div>
                  </div>
                  <div className="flex justify-start items-center gap-2 mb-5">
                    <div className="bg-success-900 py-2 px-3 rounded-lg">
                      <p className="text-baseColor-500 font-semibold text-lg">Buka</p>
                    </div>
                    {item && item.opening_hours && (
                      <p className="text-primary-500 font-semibold text-lg">{item.opening_hours}</p>
                    )}
                  </div>
                  <div className="flex justify-start items-center gap-2">
                    <div className="text-primary-500 font-semibold text-lg">Harga Tiket Masuk:</div>
                    {item && item.price_details && item.price_details.length > 1 ? (
                      <div className="bg-success-900 py-2 px-3 rounded-lg">
                        <p className="text-baseColor-500 font-semibold text-lg">{item.price_details[0].price}</p>
                      </div>
                    ) : (
                      <div className="bg-success-900 py-2 px-3 rounded-lg">
                        <p className="text-baseColor-500 font-semibold text-lg"></p>
                      </div>
                    )}
                  </div>
                  <div className="card-actions  justify-end">
                    <Link to={`/wisata/${item.id}`}><button className="btn bg-primary-500 text-sm font-semibold text-baseColor-500 px-12 py-1">Lebih Detail</button></Link>
                  </div>
                </div>
              </div>
            ))}
            <div className="join">
              <button className="join-item btn" onClick={() => paginate(currentPage - 1)} disabled={currentPage === 1}>
                Prev
              </button>
              {Array.from({ length: Math.ceil(data.length / itemsPerPage) }, (_, i) => (
                <button key={i} className="join-item btn" onClick={() => paginate(i + 1)}>
                  {i + 1}
                </button>
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

export default Wisata;
