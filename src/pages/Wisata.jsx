import Header from "../Section/Wisata/Header";
import Search from "../Section/Wisata/Search";

const Wisata = () => {
  return (
    <div className="bg-[#f1f1f1]">
      <Header />
      <Search />
      <section className="font-Poppins px-24 py-20">
        <h4 className="text-2xl text-primary-500 font-bold mb-20 ms-4">Telusuri Tempat - Tempat Wisata di Sumatera Utara</h4>
        <div className="w-full flex">
          <aside className=" w-1/4">
            <ul className="menu text-lg  w-full  text-primary-500">
            <h5 className="font-bold">Filter</h5>
                  <hr className="border-primary-500"/>
              <li>
                <details >
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
                  <hr className="border-primary-500 w-[95%] ms-auto"/>
              <li>
                <details >
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
                  <hr className="border-primary-500 w-[95%] ms-auto"/>
              <li>
                <a className="font-bold">Jarak Terdekat</a>
              </li>
            </ul>
          </aside>
          <main className="bg-orange-200 w-3/4">2</main>
        </div>
      </section>
    </div>
  );
};

export default Wisata;
