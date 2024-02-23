import { faFacebook, faInstagram, faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { faBookmark } from "@fortawesome/free-regular-svg-icons";
import { faBicycle, faBookmark as faBookMarkSolid, faCalendarDays, faCar, faLocationDot, faMotorcycle, faPhone, faSackDollar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import React, { useEffect, useRef } from "react";
import thumbnailImage1 from "../../../public/thumbnailCarousel1.png";
import thumbnailImage2 from "../../../public/thumbnailCarousel2.png";
import thumbnailImage3 from "../../../public/thumbnailCarousel3.png";
import thumbnailImage4 from "../../../public/thumbnailCarousel4.png";
import thumbnailImage5 from "../../../public/thumbnailCarousel5.png";

const data = [
  {
    gambar: thumbnailImage1,
  },
  {
    gambar: thumbnailImage2,
  },
  {
    gambar: thumbnailImage3,
  },
  {
    gambar: thumbnailImage4,
  },
  {
    gambar: thumbnailImage5,
  },
  {
    gambar: thumbnailImage1,
  },
  {
    gambar: thumbnailImage2,
  },
  {
    gambar: thumbnailImage3,
  },
  {
    gambar: thumbnailImage4,
  },
  {
    gambar: thumbnailImage5,
  },
];

const Detail = () => {
  const mainCarousel = useRef(null);
  const thumbnailCarousel = useRef(null);

  useEffect(() => {
    if (mainCarousel.current && thumbnailCarousel.current) {
      mainCarousel.current.sync(thumbnailCarousel.current.splide);
    }
  }, []);

  return (
    <section>
      <main className="w-5/6  bg-primary-50 flex rounded-lg mx-auto py-10 px-10 gap-10">
        <div className="w-3/5 ">
          <Splide
            id="main-carousel"
            ref={mainCarousel}
            options={{
              type: "fade",
              rewind: true,
              pagination: false,
              arrows: false,
              drag: false,
            }}
            className="mb-5"
          >
            {data.map((item, index) => (
              <SplideSlide key={index}>
                <img src={item.gambar} className="rounded-lg" alt="imageCarousel" />
              </SplideSlide>
            ))}
          </Splide>
          <Splide
            id="thumbnail-carousel"
            ref={thumbnailCarousel}
            options={{
              gap: 10,

              pagination: false,
              isNavigation: true,

              perPage: 4,
              breakpoints: {
                600: {
                  fixedWidth: 60,
                  fixedHeight: 44,
                },
              },
            }}
          >
            {data.map((item, index) => (
              <SplideSlide key={index}>
                <img src={item.gambar} className="rounded-lg" alt="thumbnailCarousel" />
              </SplideSlide>
            ))}
          </Splide>
        </div>
        <aside className="w-2/5 ">
          <div className="bg-baseColor-500 rounded-lg px-4 pt-10 w-full">
            <div className="flex justify-between items-center">
              <div className="flex gap-1">
                <div className="mask mask-star h-6 aspect-square bg-warning-700"></div>
                <div className="mask mask-star h-6 aspect-square bg-warning-700"></div>
                <div className="mask mask-star h-6 aspect-square bg-warning-700"></div>
                <div className="mask mask-star h-6 aspect-square bg-warning-700"></div>
                <div className="mask mask-star h-6 aspect-square bg-warning-700"></div>
              </div>
              <label className="swap">
                <input type="checkbox" className="hidden" />
                <FontAwesomeIcon className="swap-off fill-current text-primary-500" size="2x" icon={faBookmark} />

                <FontAwesomeIcon className="swap-on fill-current text-primary-500" size="2x" icon={faBookMarkSolid} />
              </label>
            </div>
            <aside className=" w-full">
              <ul className="menu text-lg  w-full  text-primary-500">
                <li>
                  <div className="flex w-full gap-5 ">
                    <FontAwesomeIcon icon={faLocationDot} />
                    <p className="font-semibold w-full text-base">Panatapan Parapat (Pintu Masuk Danau Toba)</p>
                  </div>
                </li>
                <hr className="border-primary-500 mt-2 mb-2" />
                <li>
                  <details>
                    <summary className="font-bold flex gap-5">
                      <FontAwesomeIcon icon={faCalendarDays} />
                      <p className="font-semibold w-full text-base">Jam Operasional</p>
                    </summary>
                    <ul className="gap-0">
                      <li>
                        <div className="flex justify-between text-sm text-primary-300">
                          <p>Senin</p>
                          <p>00:00 - 23:59 WIB</p>
                        </div>
                      </li>
                      <li>
                        <div className="flex justify-between text-sm text-primary-300">
                          <p>Selasa</p>
                          <p>00:00 - 23:59 WIB</p>
                        </div>
                      </li>
                      <li>
                        <div className="flex justify-between text-sm text-primary-300">
                          <p>Rabu</p>
                          <p>00:00 - 23:59 WIB</p>
                        </div>
                      </li>
                      <li>
                        <div className="flex justify-between text-sm text-primary-300">
                          <p>Kamis</p>
                          <p>00:00 - 23:59 WIB</p>
                        </div>
                      </li>
                      <li>
                        <div className="flex justify-between text-sm text-primary-300">
                          <p>Jumat</p>
                          <p>00:00 - 23:59 WIB</p>
                        </div>
                      </li>
                      <li>
                        <div className="flex justify-between text-sm text-primary-300">
                          <p>Sabtu</p>
                          <p>00:00 - 23:59 WIB</p>
                        </div>
                      </li>
                      <li>
                        <div className="flex justify-between text-sm text-primary-300">
                          <p>Minggu</p>
                          <p>00:00 - 23:59 WIB</p>
                        </div>
                      </li>
                    </ul>
                  </details>
                </li>
                <hr className="border-primary-500 mt-2 mb-2" />
                <li>
                  <details>
                    <summary className="font-bold flex gap-5">
                      <FontAwesomeIcon icon={faSackDollar} />
                      <p className="font-semibold w-full text-base">Harga Tiket Masuk</p>
                    </summary>
                    <div className="overflow-x-auto">
                      <table className="table text-sm font-normal">
                     
                        <thead>
                          <tr>
                            <th></th>
                            <th className="text-primary-300 text-sm">Dewasa</th>
                            <th className="text-primary-300 text-sm">Anak - anak</th>
                           
                          </tr>
                        </thead>
                        <tbody className="">
                           <tr>
                            <th className="text-primary-300 text-sm">Weekday</th>
                            <td>Rp 5.000</td>
                            <td>Rp 5.000</td>
                           
                          </tr>
                       
                          <tr>
                            <th className="text-primary-300 text-sm">Weekend</th>
                            <td>Rp 10.000</td>
                            <td>Rp 10.000</td>
                         
                          </tr>
                        </tbody>
                      </table>
                      <hr />
                      <table className="table text-sm font-normal">
                        {/* head */}
                        <thead>
                          <tr>
                            <th></th>
                            <th className="text-primary-300 text-sm">
                                <FontAwesomeIcon icon={faCar}/>
                            </th>
                            <th className="text-primary-300 text-sm">
                                <FontAwesomeIcon icon={faMotorcycle}/>
                            </th>
                            <th className="text-primary-300 text-sm">
                                <FontAwesomeIcon icon={faBicycle}/>
                            </th>
                          </tr>
                        </thead>
                        <tbody >
                           <tr>
                            <th className="text-primary-300 text-sm">Biaya Parkir</th>
                            <td>Rp 5.000</td>
                            <td>Rp 5.000</td>
                            <td>Rp 5.000</td>
                          </tr>
                           <tr>
                            <th className="text-primary-300 text-sm">Transportasi</th>
                            <td colSpan={3}>Rp 1.500.000/Perahu</td>
                          
                    
                          
                          </tr>
                        </tbody>
                        
                      </table>
                    </div>
                  </details>
                </li>
                <hr className="border-primary-500 mt-2 mb-2" />
                <li>
                  <div className="flex gap-5 mt-5 ml-14 ms-auto ">
                    <FontAwesomeIcon size="2x" icon={faInstagram} />
                    <FontAwesomeIcon size="2x" icon={faFacebook} />
                    <FontAwesomeIcon size="2x" icon={faXTwitter} />
                    <FontAwesomeIcon size="2x" icon={faPhone} />
                  </div>
                </li>
              </ul>
            </aside>
          </div>
        </aside>
      </main>
    </section>
  );
};

export default Detail;
