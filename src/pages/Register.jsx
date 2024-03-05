import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLock, faUser, faUserAlt } from "@fortawesome/free-solid-svg-icons";
import { Carousel } from "flowbite-react";
import image1 from "../../public/carouselLogin1.png";
import image2 from "../../public/carouselLogin2.png";
import image3 from "../../public/carouselLogin3.png";
import image4 from "../../public/carouselLogin4.png";
import logoUtama from "../../public/logoUtama.png";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const Register = () => {
  const navigate = useNavigate();

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    fullname: "",
    username: "",
    email: "",
    password: "",
  });

  const { fullname, username, email, password } = formData;

  const handleRegister = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      try {
        const response = await axios.post('https://aws.dvnnfrr.my.id/auth/register', formData);
        console.log(response);
        setSubmitted(true);
        navigate('/login');
      } catch (error) {
        console.log(error);
      }
    }
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = {};

    if (!fullname) {
      newErrors.fullname = "Name is required";
      isValid = false;
    }

    if (!username) {
      newErrors.username = "Username is required";
      isValid = false;
    }

    if (!email) {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Email is invalid";
      isValid = false;
    }

    if (!password) {
      newErrors.password = "Password is required";
      isValid = false;
    } else if (password.length < 8) {
      newErrors.password = "Password must be at least 8 characters long";
      isValid = false;
    } else if (!/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W)/.test(password)) {
      newErrors.password =
        "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character";
      isValid = false;
    }

    setErrors(newErrors);

    return isValid;
  };

  return (
    <div className="hero min-h-screen w-full bg-baseColor-500">
      <div className="flex w-full h-full flex-col lg:flex-row">
        <div className="w-1/2 hidden lg:block">
          <Carousel indicators={false} className="h-full rounded-none">
            <img loading="lazy" src={image1} className="h-full aspect-auto rounded-none object-cover" alt="CarouselImage" />
            <img loading="lazy" src={image2} className="h-full aspect-auto rounded-none object-cover" alt="CarouselImage" />
            <img loading="lazy" src={image3} className="h-full aspect-auto rounded-none object-cover" alt="CarouselImage" />
            <img loading="lazy" src={image4} className="h-full aspect-auto rounded-none object-cover" alt="CarouselImage" />
          </Carousel>
        </div>
        <div className="w-full lg:w-1/2 flex justify-center items-center">
          <div className="card w-4/5 ">
            <img loading="lazy" src={logoUtama} draggable={false} alt="logoUtama" className="w-4/5 lg:w-2/5 mx-auto aspect-auto" />
            <h3 className="card-title font-Poppins text-xl lg:text-4xl font-semibold text-primary-500 mx-auto">Buat Akun, Yuk!</h3>
            <form onSubmit={handleRegister} className="card-body font-Poppins">
              <div className="form-control mb-2">
                <label className="input input-bordered flex items-center gap-2">
                  <FontAwesomeIcon icon={faUserAlt} />
                  <input type="text" className="grow border-none  focus:ring-0" placeholder="Fullname" value={fullname} onChange={(e) => setFormData({ ...formData, fullname: e.target.value })} />
                </label>
                {errors.fullname && <small className="font-Poppins text-error-900">{errors.fullname}</small>}
              </div>
              <div className="form-control mb-2">
                <label className="input input-bordered flex items-center gap-2">
                  <FontAwesomeIcon icon={faUser} />
                  <input type="text" className="grow border-none  focus:ring-0" placeholder="Username" value={username} onChange={(e) => setFormData({ ...formData, username: e.target.value })} />
                </label>
                {errors.username && <small className="font-Poppins text-error-900">{errors.username}</small>}
              </div>
              <div className="form-control mb-2">
                <label className="input input-bordered flex items-center gap-2">
                  <FontAwesomeIcon icon={faEnvelope} />
                  <input type="text" className="grow border-none  focus:ring-0" placeholder="Email" value={email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
                </label>
                {errors.email && <small className="font-Poppins text-error-900">{errors.email}</small>}
              </div>
              <div className="form-control">
                <label className="input input-bordered flex items-center gap-2">
                  <FontAwesomeIcon icon={faLock} />
                  <input type="password" className="grow border-none  focus:ring-0" placeholder="Kata Sandi" value={password} onChange={(e) => setFormData({ ...formData, password: e.target.value })} />
                </label>
                {errors.password && <small className="font-Poppins text-error-900">{errors.password}</small>}
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button type="submit" className="btn bg-primary-500 font-semibold font-Poppins text-baseColor-300">
                  Daftar
                </button>
              </div>
              <small className="text-secondary-50 font-Poppins">
                Sudah punya akun?
                <Link to={"/login"}>
                  <span className="text-secondary-500">Yuk,Masuk</span>
                </Link>
              </small>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
