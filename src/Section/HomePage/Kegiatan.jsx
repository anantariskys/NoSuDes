import bukitImage from "../../../public/bukit.png";


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
];

const Kegiatan = () => {
  return (
    <div className="w-full ">
      <h1 className="font-bold text-sm md:text-4xl mb-10 md:mb-28 text-primary-500 font-Poppins text-center">Cari Sesuai Kegiatan</h1>
      <div className="w-full flex flex-wrap gap-5 justify-center">
        {data.map((item) => (
          <div key={item.id} className="w-2/5 md:w-1/5 aspect-[4/6] flex rounded-xl justify-center py-5 lg:py-11 items-end" style={{ backgroundImage: `url(${bukitImage})`, backgroundSize: "cover" }}>
            <h3 className="text-sm md:text-lg text-center lg:text-2xl font-semibold  text-baseColor-500 relative z-20 ">{item.nama}</h3>
          </div>
        ))}
      </div>
      <hr className="border-secondary-500 w-[90%] mx-auto md:mt-20 mt-10 md:mb-20 mb-10" />
    </div>
  );
};

export default Kegiatan;
