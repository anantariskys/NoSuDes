import { faFacebook, faInstagram, faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { faBookmark } from "@fortawesome/free-regular-svg-icons";
import { faBicycle, faBookmark as faBookMarkSolid, faCalendarDays, faCar, faLocationDot, faMotorcycle, faPhone, faSackDollar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import React, { useEffect, useRef } from "react";
import ThumbnailCarousel from "../../components/fragments/ThumbnailCarousel";

const jamOperasional = [
  {
    hari: "Senin",
    jam: "00:00 - 23:59 WIB",
  },
  {
    hari: "Selasa",
    jam: "00:00 - 23:59 WIB",
  },
  {
    hari: "Rabu",
    jam: "00:00 - 23:59 WIB",
  },
  {
    hari: "Kamis",
    jam: "00:00 - 23:59 WIB",
  },
  {
    hari: "Jumat",
    jam: "00:00 - 23:59 WIB",
  },
  {
    hari: "Sabtu",
    jam: "00:00 - 23:59 WIB",
  },
  {
    hari: "Minggu",
    jam: "00:00 - 23:59 WIB",
  },
];

const artikel = `<p>
Pulau Kalimantung Na Menek bisa dibilang sebagai Maldieves milik Indonesia. Keindahan dan suasana yang ada di pulau tersebut bisa menandingi pesona dari Maldieves di Asia Selatan sana.  Pulau Kalimantung termasuk pulau yang tidak berpenghuni dan dikelilingi oleh pantai yang dangkal membuat Traveler jadi betah dan merasa cukup aman untuk bermain - main disana.
</p>
<p>
Untuk sampai ke pulau Kalimantung Na Menek,  disarankan untuk menyeberang dari pantai terdekat seperti pantai Pandan atau Pantai SIbolga dengan menyewa perahu penyeberangan sekitar Rp 1.500.000 dalam waktu 1,5 - 2 jam perjalanan. Itu sebabnya akan lebih hemat jika pergi ke pulau tersebut secara beramai - ramai. Jika Traveler ingin pergi dari Ibukota Medan, maka akan memakan waktu 8 jam 30 menit tanpa tol dan 2 jam perjalanan lewat tol. 
</p>
<p>
Traveler bisa sekaligus melakukan snorkeling dengan biaya Rp 50.000. Biasanya dengan jasa trip tertentu bisa mendapatkan paket sewa perahu sekaligus snorkeling, jadi hati - hati dalam memilih jasa Trip ya Traveler!
</p>`;

const Detail = () => {
  return (
    <section>
      <main className="w-5/6  bg-primary-50 flex rounded-lg mx-auto py-10 px-10 gap-10">
        <div className="w-3/5 ">
          <ThumbnailCarousel />
          <div className="mt-20  font-Poppins">
            <h4 className="text-2xl text-primary-700 font-semibold">Detail Tempat</h4>
            <hr className="border-primary-500 my-3 " />
            <article className="flex flex-col gap-5 text-sm font-semibold text-primary-700 text-justify" dangerouslySetInnerHTML={{ __html: artikel }}></article>
          </div>
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
                    <ul>
                      {jamOperasional.map((item, index) => (
                        <li key={index}>
                          <div className="flex justify-between text-sm text-primary-300">
                            <p>{item.hari}</p>
                            <p>{item.jam}</p>
                          </div>
                        </li>
                      ))}
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
                            <td>Rp 5.000</td>
                            <td>Rp 5.000</td>
                            <td>Rp 5.000</td>
                          </tr>
                          <tr>
                            <th className="text-primary-300 text-sm">Transportasi</th>
                            <td colSpan={3}>Rp 1.500.000/Perahu</td>
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
                </li>
                <hr className="border-primary-500 mt-2 mb-2" />

                <div className="flex gap-5 mt-5 ml-14 ms-auto pb-5 ">
                  <FontAwesomeIcon size="2x" icon={faInstagram} />
                  <FontAwesomeIcon size="2x" icon={faFacebook} />
                  <FontAwesomeIcon size="2x" icon={faXTwitter} />
                  <FontAwesomeIcon size="2x" icon={faPhone} />
                </div>
              </ul>
              
            </aside>
          </div>
        </aside>
      </main>
    </section>
  );
};

export default Detail;
