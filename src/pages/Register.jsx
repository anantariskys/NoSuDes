import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Carousel } from "flowbite-react";
import image1 from "../../public/carouselLogin1.png";
import image2 from "../../public/carouselLogin2.png";
import image3 from "../../public/carouselLogin3.png";
import image4 from "../../public/carouselLogin4.png";
import logoUtama from "../../public/logoUtama.png";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faLock, faUser } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
const Register = () => {
  return (
    <div className="hero min-h-screen w-full bg-baseColor-500">
      <div className="flex w-full h-full flex-col lg:flex-row">
        <div className="w-1/2">
          <Carousel indicators={false} className="h-full rounded-none">
            <img loading="lazy" src={image1} className="h-full aspect-auto rounded-none object-cover" alt="CarouselImage" />
            <img loading="lazy" src={image2} className="h-full aspect-auto rounded-none object-cover" alt="CarouselImage" />
            <img loading="lazy" src={image3} className="h-full aspect-auto rounded-none object-cover" alt="CarouselImage" />
            <img loading="lazy" src={image4} className="h-full aspect-auto rounded-none object-cover" alt="CarouselImage" />
          </Carousel>
        </div>
        <div className="w-1/2 flex justify-center items-center">
          <div className="card w-4/5 ">
            <img loading="lazy" src={logoUtama} draggable={false} alt="logoUtama" className="w-2/5 mx-auto aspect-auto" />
            <h3 className="card-title font-Poppins text-4xl font-semibold text-primary-500 mx-auto">Buat Akun, Yuk!</h3>
            <form className="card-body font-Poppins">
              <div className="form-control mb-2">
                <label className="input input-bordered flex items-center gap-2">
                  <FontAwesomeIcon icon={faUser}/>
                  <input type="text" className="grow border-none  focus:ring-0" placeholder="Username" />
                </label>
              </div>
              <div className="form-control mb-2">
                <label className="input input-bordered flex items-center gap-2">
                  <FontAwesomeIcon icon={faEnvelope}/>
                  <input type="text" className="grow border-none  focus:ring-0" placeholder="Email" />
                </label>
              </div>
              <div className="form-control">
                <label className="input input-bordered flex items-center gap-2">
                <FontAwesomeIcon icon={faLock} />
                  <input type="password" className="grow border-none  focus:ring-0" placeholder="Kata Sandi" />
                </label>
             
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn bg-primary-500 font-semibold font-Poppins text-baseColor-300">Masuk</button>
              </div>
              <small className="text-secondary-50 font-Poppins">Sudah punya akun?<Link to={'/login'}><span className="text-secondary-500">Yuk,Masuk</span></Link></small>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
