import { faFacebook, faInstagram, faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { faBookmark } from "@fortawesome/free-regular-svg-icons";
import { faBicycle, faBookmark as faBookMarkSolid, faCalendarDays, faCar, faChevronUp, faCloudBolt, faCloudRain, faLocationDot, faMotorcycle, faPhone, faSackDollar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import React, { useEffect, useState } from "react";
import Rating from "../../components/Rating";
import ThumbnailCarousel from "../../components/ThumbnailCarousel";

const day = [
  {
    hari: "Senin",
  },
  {
    hari: "Selasa",
  },
  {
    hari: "Rabu",
  },
  {
    hari: "Kamis",
  },
  {
    hari: "Jumat",
  },
  {
    hari: "Sabtu",
  },
  {
    hari: "Minggu",
  },
];

const Detail = ({ data }) => {
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);

  const [myLoc, setMyLoc] = useState(null);
  const [distance, setDistance] = useState(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;
        setMyLoc({ lat, lon });
        const calculatedDistance = calculateDistance(lat, lon, data.maps_detail.geometry.location.lat, data.maps_detail.geometry.location.lng);
        setDistance(calculatedDistance.toFixed(0));
      });
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
  }, [distance, data]);

  function calculateDistance(lat1, lon1, lat2, lon2) {
    const R = 6371;
    const dLat = deg2rad(lat2 - lat1);
    const dLon = deg2rad(lon2 - lon1);
    const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) + Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const d = R * c;

    return d;
  }

  function deg2rad(deg) {
    return deg * (Math.PI / 180);
  }

  const date = new Date();

  return (
    <section>
      <main className="w-5/6  bg-primary-50 flex rounded-lg mx-auto py-10 px-10 gap-10">
        <div className="w-3/5 ">
          {data && <ThumbnailCarousel attraction_photos={data.attraction_photos} />}
          <div className="mt-20  font-Poppins">
            <h4 className="text-2xl text-primary-700 font-semibold">Detail Tempat</h4>
            <hr className="border-primary-500 my-3 " />
            <article className="flex flex-col gap-5 text-sm font-semibold text-primary-700 text-justify">{data && data.description}</article>
          </div>
        </div>
        <aside className="w-2/5  ">
          <div className="bg-baseColor-500 rounded-lg px-4 pt-10 w-full">
            <div className="flex justify-between items-center">
              {data && data.maps_detail && <Rating rating={data.maps_detail.rating} />}
              <label className="swap">
                <input type="checkbox" className="hidden" />
                <FontAwesomeIcon className="swap-off fill-current text-primary-500" size="2x" icon={faBookmark} />

                <FontAwesomeIcon className="swap-on fill-current text-primary-500" size="2x" icon={faBookMarkSolid} />
              </label>
            </div>
            <aside className=" mt-3 flex flex-col text-primary-500 font-semibold w-[90%] ">
              <div className="flex  w-[90%] items-center gap-5 ">
                <FontAwesomeIcon icon={faLocationDot} />
                {data && <p className="font-semibold w-full text-base">{data.location}</p>}
              </div>

              <hr className="border-primary-500 mt-2 mb-2" />

              <details>
                <summary onClick={() => setIsOpen1(!isOpen1)} className="font-bold flex justify-between items-center">
                  <div className="flex gap-5 items-center">
                    <FontAwesomeIcon icon={faCalendarDays} />
                    <p className="font-semibold w-full text-base">Jam Operasional</p>
                  </div>

                  <FontAwesomeIcon className={`${isOpen1 ? "rotate-180" : "rotate-0"} duration-300 ease-in-out transition-transform`} icon={faChevronUp} />
                </summary>
                <ul>
                  {day.map((item, index) => (
                    <li key={index}>
                      <div className="flex justify-between text-sm text-primary-300">
                        <p>{item.hari}</p>
                        <p>{data.opening_hours}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </details>

              <hr className="border-primary-500 mt-2 mb-2" />

              <details>
                <summary onClick={() => setIsOpen2(!isOpen2)} className="font-bold justify-between flex gap-5 items-center">
                  <div className="flex gap-5 items-center">
                    <FontAwesomeIcon icon={faSackDollar} />
                    <p className="font-semibold w-full text-base">Harga Tiket Masuk</p>
                  </div>
                  <FontAwesomeIcon className={`${isOpen2 ? "rotate-180" : "rotate-0"} duration-300 ease-in-out transition-transform`} icon={faChevronUp} />
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
                        <td className="text-center">
                          {data.price_details &&
                            data.price_details
                              .filter((detail) => detail.day_type)
                              .map((item, index) => {
                                return (item.day_type === "Semua" || item.day_type === "Weekday") && (item.age_group === "Dewasa" || item.age_group === "Semua") ? `Rp ${item.price}` : null;
                              })}
                        </td>
                        <td className="text-center">
                          {data.price_details &&
                            data.price_details
                              .filter((detail) => detail.day_type)
                              .map((item, index) => {
                                return (item.day_type === "Semua" || item.day_type === "Weekday") && (item.age_group === "Anak-anak" || item.age_group === "Semua") ? `Rp ${item.price}` : null;
                              })}
                        </td>
                      </tr>

                      <tr>
                        <th className="text-primary-300 text-sm">Weekend</th>
                        <td className="text-center">
                          {data.price_details &&
                            data.price_details
                              .filter((detail) => detail.day_type)
                              .map((item, index) => {
                                return (item.day_type === "Semua" || item.day_type === "Weekend") && (item.age_group === "Dewasa" || item.age_group === "Semua") ? `Rp ${item.price}` : null;
                              })}
                        </td>
                        <td className="text-center">
                          {" "}
                          {data.price_details &&
                            data.price_details
                              .filter((detail) => detail.day_type)
                              .map((item, index) => {
                                return (item.day_type === "Semua" || item.day_type === "Weekend") && (item.age_group === "Anak-anak" || item.age_group === "Semua") ? `Rp ${item.price}` : null;
                              })}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <hr />
                  <table className="table text-sm font-normal">
                    <thead>
                      <tr>
                        <th></th>
                        <th className="text-primary-300 text-sm">
                          <FontAwesomeIcon icon={faCar} />
                        </th>
                        <th className="text-primary-300 text-sm">
                          <FontAwesomeIcon icon={faMotorcycle} />
                        </th>
                        <th className="text-primary-300 text-sm">
                          <FontAwesomeIcon icon={faBicycle} />
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th className="text-primary-300 text-sm">Biaya Parkir</th>
                        <td>
                          {data.price_details &&
                            data.price_details
                              .filter((detail) => detail.park_type)
                              .map((item) => {
                                return item.park_type === "Mobil" ? `Rp ${item.price}` : null;
                              })}
                        </td>
                        <td>
                          {" "}
                          {data.price_details &&
                            data.price_details
                              .filter((detail) => detail.park_type)
                              .map((item) => {
                                return item.park_type === "Motor" ? `Rp ${item.price}` : null;
                              })}
                        </td>
                        <td>
                          {data.price_details &&
                            data.price_details
                              .filter((detail) => detail.park_type)
                              .map((item) => {
                                return item.park_type === "Sepeda" ? `Rp ${item.price}` : null;
                              })}
                        </td>
                      </tr>
                      <tr>
                        <th className="text-primary-300 text-sm">Transportasi</th>
                        <td colSpan={3}>
                          {data.price_details &&
                            data.price_details
                              .filter((detail) => detail.park_type)
                              .map((item) => {
                                return item.park_type === "Perahu" ? `Rp ${item.price}/perahu` : null;
                              })}
                        </td>
                      </tr>
                      <tr>
                        <td colSpan={4} className="text-error-700 text-[0.625rem]">
                          *Harga diatas hanya estimasi untuk transportasi di lokasi
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </details>

              <hr className="border-primary-500 mt-2 mb-2" />

              <div className="flex gap-5 mt-5 self-end  pb-5 ">
                <FontAwesomeIcon size="2x" icon={faInstagram} />
                <FontAwesomeIcon size="2x" icon={faFacebook} />
                <FontAwesomeIcon size="2x" icon={faXTwitter} />
                <FontAwesomeIcon size="2x" icon={faPhone} />
              </div>
            </aside>
          </div>
          <div className="w-full mt-5 bg-baseColor-500 py-5 rounded-xl">
            <div className="overflow-x-auto">
              <table className="table table-xs w-[90%] mx-auto ">
                <thead>
                  <tr className="text-primary-500">
                    <th>Hari ini</th>
                    <th>{`${String(date.getDate() + 1).padStart(2, "0")}/${String(date.getMonth() + 1).padStart(2, "0")}`}</th>
                    <th>{`${String(date.getDate() + 2).padStart(2, "0")}/${String(date.getMonth() + 1).padStart(2, "0")}`}</th>
                    <th>{`${String(date.getDate() + 3).padStart(2, "0")}/${String(date.getMonth() + 1).padStart(2, "0")}`}</th>
                    <th>{`${String(date.getDate() + 4).padStart(2, "0")}/${String(date.getMonth() + 1).padStart(2, "0")}`}</th>
                    <th>{`${String(date.getDate() + 5).padStart(2, "0")}/${String(date.getMonth() + 1).padStart(2, "0")}`}</th>
                    <th>{`${String(date.getDate() + 6).padStart(2, "0")}/${String(date.getMonth() + 1).padStart(2, "0")}`}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr >
                    {data.weather_info && data.weather_info.map((item) => <td className="text-center text-primary-500" key={item.id}>{item.main === "Rain" ? <FontAwesomeIcon size="2x" icon={faCloudRain} /> : item.main === "Clouds" ? <FontAwesomeIcon size="2x" icon={faCloudBolt} /> : null}</td>)}
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="w-full bg-baseColor-500 rounded-xl mt-5">
            <iframe className="w-full aspect-video rounded-t-xl   border-none" loading="lazy" allowFullScreen referrerpolicy="no-referrer-when-downgrade" src={data.maps_embed_url}></iframe>
            <div className="w-full rounded-b-xl   py-10 pl-5">{distance && <p className="font-semibold font-Poppins text-sm text-primary-500">{distance} KM dari lokasi anda</p>}</div>
          </div>
        </aside>
      </main>
    </section>
  );
};

export default Detail;
