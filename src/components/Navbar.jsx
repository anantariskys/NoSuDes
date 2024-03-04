import { faUser } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import logo from "../../public/logoUtama.png";
import { useAuth } from "../hooks/useAuth";
const Navbar = () => {
  const navigate = useNavigate();

  const logout = () => {
    window.localStorage.removeItem('token');
    navigate('/');
  };

 

  return (
    <nav className="navbar px-8  bg-baseColor-500">
      <div className="navbar-start items-center">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <a>Parent</a>
              <ul className="p-2">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </li>
            <li>
              <a>Item 3</a>
            </li>
          </ul>
        </div>
        <img loading="lazy" src={logo} className="w-[35%] aspect-auto  " alt="logo" />
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal font-Poppins text-primary-500 px-1">
          <li>
            <Link to={"/wisata"} className="text-lg font-semibold">
              Wisata
            </Link>
          </li>
          <li>
            <Link to={"/aktivitas"} className="text-lg font-semibold">
              Aktivitas
            </Link>
          </li>
          <li>
            <Link to={"/cerita"} className="text-lg font-semibold">
              Cerita
            </Link>
          </li>
          <li>
            <Link to={"/artikel"} className="text-lg font-semibold">
              Artikel
            </Link>
          </li>
          <li>
            <select className="border-none text-lg font-semibold bg-transparent focus:ring-0 ">
              <option value={"ID"}>ID</option>
              <option value={"EN"}>EN</option>
            </select>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <div className="dropdown dropdown-end">
          {window.localStorage.getItem('token') ? (
            <>
              <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img alt="Tailwind CSS Navbar component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                </div>
              </div>
              <ul tabIndex={0} className="mt-3 z-10 p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                <li>
                  <Link to={'/profil'} >
                    Profile
                  </Link>
                </li>
                <li>
                  <p onClick={logout}>Logout</p>
                </li>
              </ul>
            </>
          ) : (
            <Link to={'/login'}>
            <div  className="h-10 flex justify-center items-center aspect-square bg-primary-500 rounded-full">
             <FontAwesomeIcon className="text-baseColor-500" icon={faUser}/>
             </div>
             </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
