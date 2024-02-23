
import { faArrowRight,  } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Splide, SplideSlide } from "@splidejs/react-splide";

import pantaiImage from "../../../public/pantai.png";
const data = [
  {
    id: 1,
    nama: "Aktivitas di Alam",
  },
  {
    id: 2,
    nama: "Aktivitas di Kota",
  },
  {
    id: 3,
    nama: "Kuliner",
  },
  {
    id: 1,
    nama: "Aktivitas di Alam",
  },
  {
    id: 2,
    nama: "Aktivitas di Kota",
  },
  {
    id: 3,
    nama: "Kuliner",
  },
  {
    id: 1,
    nama: "Aktivitas di Alam",
  },
  {
    id: 2,
    nama: "Aktivitas di Kota",
  },
  {
    id: 3,
    nama: "Kuliner",
  },
];


const Rekomendasi = () => {
  return (
    <section className="w-full">
      <h1 className="font-semibold text-2xl text-primary-500 font-Poppins my-16 px-24">Rekomendasi Aktivitas Di Daerah Danau Toba</h1>
      <Splide
        options={{
          perPage: 4,
          rewind: true,
          pagination: false,
          padding: "10px",
          perMove: 1,
          arrows: false,
          gap: "30px",
          padding: {
            right: "100px",
            left: "100px",
          },
        }}
      >
        {data.map((item) => (
          <SplideSlide key={item.id}>
          <div key={item.id} className="w-full aspect-[4/6] flex rounded-xl justify-center py-11 items-end" style={{ backgroundImage: `url(${pantaiImage})`, backgroundSize: "cover" }}>
            <h3 className="text-2xl font-semibold  text-baseColor-500 relative z-20 ">{item.nama}</h3>
          </div>
          </SplideSlide>
        ))}
      </Splide>
    </section>
  );
};

export default Rekomendasi;
