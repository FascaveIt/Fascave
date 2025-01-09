import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import fasCaveLogo from "../../../Asset/imagesWeb/Fascave_Logo.png";
import "./Navbar.css";

export default function Navbar() {
  const [menuActive, setMenuActive] = useState(false);

  // Handle hamburger menu toggle
  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  return (
    <div className="header">
      <div className="navbar w-11/12 m-auto mt-3 flex justify-between items-center h-16 bg-white text-black relative shadow-md font-sans rounded-lg px-8">
        <NavLink to="/" className="logo flex items-center">
          <img src={fasCaveLogo} alt="fasCaveLogo" className="h-10" />
        </NavLink>

        <div className={`item flex space-x-6 ${menuActive ? "active" : ""}`}>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-blue-950 font-semibold hover:text-blue-900"
                : "text-black font-medium  hover:text-blue-900"
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/Services"
            className={({ isActive }) =>
              isActive
                ? "text-blue-950 font-semibold  hover:text-blue-900"
                : "text-black font-medium  hover:text-blue-900"
            }
          >
            Services
          </NavLink>
          <NavLink
            to="/About_Us"
            className={({ isActive }) =>
              isActive
                ? "text-blue-950 font-semibold  hover:text-blue-900"
                : "text-black font-medium  hover:text-blue-900"
            }
          >
            About Us
          </NavLink>
          <NavLink
            to="https://blog.fascave.com/"
            className={({ isActive }) =>
              isActive
                ? "text-blue-950 font-semibold  hover:text-blue-900"
                : "text-black font-medium  hover:text-blue-900"
            }
          >
            Blog
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive
                ? "text-blue-950 font-semibold  hover:text-blue-900"
                : "text-black font-medium  hover:text-blue-900"
            }
          >
            Contact Us
          </NavLink>
        </div>

        <NavLink to="/contact" className="consultaion ml-4">
          <button className="bg-blue-950 hover:bg-blue-800 text-white font-semibold text-sm py-2 px-6 rounded-full shadow">
            Book a Free Consultation
          </button>
        </NavLink>

        {/* Hamburger Menu */}
        <div
          className={`hameburger ${menuActive ? "active" : ""}`}
          id="hameburger"
          onClick={toggleMenu}
        >
          <div className="one"></div>
          <div className="two"></div>
          <div className="three"></div>
        </div>
      </div>
    </div>
  );
}
