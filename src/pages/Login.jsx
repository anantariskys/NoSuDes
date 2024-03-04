import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Carousel } from "flowbite-react";
import image1 from "../../public/carouselLogin1.png";
import image2 from "../../public/carouselLogin2.png";
import image3 from "../../public/carouselLogin3.png";
import image4 from "../../public/carouselLogin4.png";
import logoUtama from "../../public/logoUtama.png";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";


const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();

    if (!formData.email) {
      setErrors({ email: "Email is required" });
      return;
    }

    if (!formData.password) {
      setErrors({ password: "Password is required" });
      return;
    }

    try {
      const response = await axios.post('https://aws.dvnnfrr.my.id/auth/login', formData);
      window.localStorage.setItem('token',response.data.data.token)

      navigate('/');
    } catch (error) {
      console.log(error);
    }

   
  };

  return (
    <div className="hero min-h-screen w-full bg-baseColor-500">
      <div className="flex w-full h-full flex-col lg:flex-row">
        <div className="w-1/2">
          <Carousel indicators={false} className="h-full rounded-none">
            <img loading="lazy" src={image1} className="h-full aspect-auto rounded-none" alt="CarouselImage" />
            <img loading="lazy" src={image2} alt="CarouselImage" />
            <img loading="lazy" src={image3} alt="CarouselImage" />
            <img loading="lazy" src={image4} alt="CarouselImage" />
          </Carousel>
        </div>
        <div className="w-1/2 flex justify-center items-center">
          <div className="card w-4/5 ">
            <img loading="lazy" src={logoUtama} draggable={false} alt="logoUtama" className="w-2/5 mx-auto aspect-auto" />
            <h3 className="card-title font-Poppins text-4xl font-semibold text-primary-500 mx-auto">Selamat datang kembali!</h3>
            <form onSubmit={handleSubmit} className="card-body font-Poppins">
              <div className="form-control mb-2">
                <label className="input input-bordered flex items-center gap-2">
                  <FontAwesomeIcon icon={faEnvelope}/>
                  <input
                    type="text"
                    name="email"
                    className="grow border-none  focus:ring-0"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
              />
                </label>
                {errors.email && <small className="font-Poppins text-error-900">{errors.email}</small>}
              </div>
              <div className="form-control">
                <label className="input input-bordered flex items-center gap-2">
                <FontAwesomeIcon icon={faLock} />
                  <input   
                  type="password"
                    name="password"
                    className="grow border-none  focus:ring-0"
                    placeholder="Kata Sandi"
                    value={formData.password}
                    onChange={handleChange} />
                </label>
                    {errors.password && <small className="font-Poppins text-error-900">{errors.password}</small>}

             
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn bg-primary-500 font-semibold font-Poppins text-baseColor-300">Masuk</button>
              </div>
              <small className="text-secondary-50">Belum punya akun?<Link to={'/register'}><span className="text-secondary-500">Yuk,Daftar</span></Link></small>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
