import { faBookmark as faBookmarkSolid } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import HeroCarousel from "../components/HeroCarousel";

const Artikel = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  useEffect(() => {
    window.scrollTo(0, 0);
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get("https://aws.dvnnfrr.my.id/articles");

        setData(response.data.data);
        setTimeout(() => {
          setIsLoading(false);
        }, 500);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data ? data.slice(indexOfFirstItem, indexOfLastItem) : null;

  const paginate = (pageNumber) => {
    if (pageNumber < 1 || pageNumber > Math.ceil(data.length / itemsPerPage)) {
      return;
    }
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      <HeroCarousel />
      <main className="w-3/4 mx-auto gap-12 py-20 flex flex-col items-center">
        {currentItems &&
          currentItems.map((item, index) => (
            <div key={index} className="card font-Poppins card-compact card-side bg-base-100 w-[90%] shadow-xl">
              <figure className="w-2/5 aspect-square">
                <img src={item.photo} className="h-full" alt="Movie" />
              </figure>
              <div className="card-body w-3/5">
                <h2 className="card-title font-semibold text-2xl text-primary-500">{item.title}</h2>
                <p className="text-secondary-300 text-sm">{new Date(item.created_at).toLocaleDateString("id-ID", { day: "2-digit", month: "2-digit", year: "numeric" })}</p>
                <p className="text-lg font-semibold text-primary-500">{item.summary}</p>
                <div className="card-actions justify-end">
                  <Link to={`/artikel/${item.id}`}>
                    {" "}
                    <button className="btn hover:bg-primary-300 bg-primary-500 text-sm font-semibold text-baseColor-500 px-12 py-1">Baca Lebih Lanjut</button>
                  </Link>
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
  );
};

export default Artikel;
