import { faInstagram, faFacebook ,faXTwitter} from "@fortawesome/free-brands-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "../../public/logoUtamaWhite.png";


const Footer = () => {
  return (
    <footer className="flex md:flex-row flex-col md:px-44 md:py-10 bg-primary-500 text-baseColor-500">
      <aside >
        <img src={logo} className="w-2/4" alt="imageLogo" loading="lazy" />
        <div className="flex gap-5 mt-5 ml-14 ">
            <FontAwesomeIcon size="2x" icon={faInstagram}/>
            <FontAwesomeIcon size="2x" icon={faFacebook}/>
            <FontAwesomeIcon size="2x" icon={faXTwitter}/>
            <FontAwesomeIcon size="2x" icon={faPhone}/>
            

        </div>
      </aside>
      <div className="flex justify-between font-extralight items-start   text-baseColor-500 font-Poppins w-2/4">
        <nav className="flex flex-col gap-7 w-1/2 items-center ">
          <h6 className="font-bold">Tentang NoSuDes</h6>
          <a className="link link-hover">Profil Perusahaan</a>
          <a className="link link-hover text-center">Hubungi Kami mntanMed@gmail.com</a>
        </nav>
        <nav className="flex flex-col gap-7 w-1/2 items-center ">
          <h6 className="font-bold">Fitur Kami</h6>
          <a className="link link-hover">Aktivitas</a>
          <a className="link link-hover">Kategori</a>
          <a className="link link-hover">Cerita Anda</a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
