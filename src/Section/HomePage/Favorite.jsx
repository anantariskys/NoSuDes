import danauImage from "../../../public/wisataFav.png";

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
      nama: "Air Terjun Sipiso Piso",
    },
    {
      id: 4,
      nama: "Patung Yesus",
    },
    {
      id: 5,
      nama: "Gedung London",
    },
    {
      id: 6,
      nama: "Pantai Lagundri",
    },
  ];

const Favorite = () => {
  return (
    <div className="w-full py-28">
      <h1 className="font-bold text-4xl  mb-28 text-primary-500 font-Poppins text-center">6 Wisata Favorit Di Sumatera Utara</h1>
      <div className="w-full flex flex-wrap gap-10 justify-center">
        {data.map((item) => (
          <div key={item.id} className="w-1/4 aspect-[4/5] flex rounded-xl justify-center py-6 relative items-end" style={{ backgroundImage: `url(${danauImage})`, backgroundSize: "cover" }}>
            <div className="w-full h-3/4 rounded-xl absolute bottom-0 bg-gradient-to-t from-primary-500 to-transparent"></div>
            <h3 className="text-2xl font-semibold  text-baseColor-500 relative z-20 ">{item.nama}</h3>
          </div>
        ))}
      </div>
      <p className="font-Poppins text-lg font-semibold text-primary-500 text-center mb-20 mt-20">
        Ingin Menjelajah yang Lain? <span>Klik Disini</span>
      </p>
      <hr className="border-secondary-500 w-[90%] mx-auto" />
    </div>
  );
};

export default Favorite;
