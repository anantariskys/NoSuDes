import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import image from "./../../public/aktivitasHeader.png";
import alam from "./../../public/aktivitasAlam.png";
import kota from "./../../public/aktivitasKota.png";
import kuliner from "./../../public/aktivitasKuliner.png";

const data = [
  {
    title: "Aktivitas di Alam",
    kategori: 'alam',
    image: alam,
    desc: "Bosan di rumah terus? Coba untuk beraktivitas di luar ruangan ditemani alam yang indah untuk menyegarkan diri kamu!",
  },
  {
    title: "Aktivitas di Perkotaan",
    kategori: 'perkotaan',
    image: kota,
    desc: "Mungkin Terlalu jauh untuk menikmati pemandangan Alami? Tenang saja! Traveler juga bisa healing dengan jalan - jalan di Kota kok!",
  },
  {
    title: "Kuliner",
    kategori: 'kuliner',
    image: kuliner,
    desc: "Atau Traveler juga bisa keliling Sumatera Utara buat kuliner-an!",
  },
];

const Aktivitas = () => {
  return (
    <div>
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
          </ul>
        </div>
      </div>
      <section className="py-16">
        <label className="input border-2 mx-auto w-1/2 border-primary-500 rounded-2xl focus-within:border-primary-500 focus-within:outline-none text-primary-500 flex items-center gap-2">
          <FontAwesomeIcon icon={faSearch} />
          <input type="text" className="grow border-none focus:ring-0 focus:outline-none font-Poppins text-lg font-semibold placeholder-poppins " placeholder="Cari yang sesuai budget" />
        </label>
      </section>
      <main className="flex flex-col gap-10 w-3/5 mx-auto pb-10">
        {data.map((item, index) => (
          <Link to={`/aktivitas/${item.kategori}`} key={index} >
          <div className=" relative font-Poppins">
            <img draggable={false} src={item.image} alt={item.title} className="w-full h-auto -z-10 " />
            <h3 className="absolute top-[10%] left-10 text-shadow text-2xl font-bold text-baseColor-500 z-10">{item.title}</h3>
            <p className="absolute bottom-[10%] left-1/2 text-shadow -translate-x-1/2 font-semibold text-base w-3/4 z-10 text-baseColor-500 text-center">{item.desc}</p>
          </div>
          </Link>
        ))}
      </main>
    </div>
  );
};

export default Aktivitas;
