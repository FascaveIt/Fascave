import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import fasCaveLogo from "../../../Asset/imagesWeb/Fascave_Logo.png";
import "./Navbar.css";
import ContactFrom from "../../contact/ContactFrom";
import {  Popover } from 'antd';
import "../../../App.css"
export default function Navbar() {

  const content = (
   <div className="flex flex-col space-y-2 p-4  rounded-lg font">
    <Link to="/services/web-development" className="text-black hover:text-blue-950">Web Development</Link>
    <Link to="/services/app-development" className="text-black hover:text-blue-950">App Development</Link>
    <Link to="/services/digital-marketing" className="text-black hover:text-blue-950">Digital Marketing</Link>
    <Link to="/services/cloud-data-analytics" className="text-black hover:text-blue-950">Cloud Data Analytics</Link>
    <Link to="/services/Power&BI" className="text-black hover:text-blue-950">Power & BI Visualization Services</Link>
   </div>
  );

  const [menuActive, setMenuActive] = useState(false);

  // Handle hamburger menu toggle
  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  const [isVisible, setIsVisble] = useState(false);

  return (
    <>    
    
    <div className="header">
    <div className="navbar w-11/12 m-auto mt-3 flex justify-between items-center h-16 bg-white text-black relative shadow-md font-sans rounded-lg px-8">
      <NavLink to="/" className="logo flex items-center">
        <img src={fasCaveLogo} alt="fasCaveLogo" className="h-10" />
      </NavLink>

      <div className={`item flex space-x-6 ${menuActive ? "active" : ""}`}>
        <a
          href="/"
          className={({ isActive }) =>
            isActive
              ? "text-blue-950 font-semibold hover:text-blue-900"
              : "text-black font-medium  hover:text-blue-900"
          }
        >
          Home
        </a>

        <a
          
          className={({ isActive }) =>
            isActive
              ? "text-blue-950 font-semibold  hover:text-blue-900"
              : "text-black font-medium  hover:text-blue-900"
          }
        >
       <Popover content={content}>Services</Popover>   
        </a>
        <a
          href="/About_Us"
          className={({ isActive }) =>
            isActive
              ? "text-blue-950 font-semibold  hover:text-blue-900"
              : "text-black font-medium  hover:text-blue-900"
          }
        >
          About Us
        </a>
        <a
          href="https://blog.fascave.com/"
          className={({ isActive }) =>
            isActive
              ? "text-blue-950 font-semibold  hover:text-blue-900"
              : "text-black font-medium  hover:text-blue-900"
          }
        >
          Blog
        </a>
        <a
          href="https://jobs.fascave.com/"
          className={({ isActive }) =>
            isActive
              ? "text-blue-950 font-semibold  hover:text-blue-900"
              : "text-black font-medium  hover:text-blue-900"
          }
        >
          Careers
        </a>

        <a
          href="/contact"
          className={({ isActive }) =>
            isActive
              ? "text-blue-950 font-semibold  hover:text-blue-900"
              : "text-black font-medium  hover:text-blue-900"
          }
        >
          Contact Us
        </a>
      </div>

   
        <button className="bg-blue-950 hover:bg-[#666c81] text-white font-semibold text-sm py-2 px-6 rounded-full shadow consultaion" onClick={()=>setIsVisble(true)}>
          Book a Free Consultation
        </button>
     

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
  
 
 

<ContactFrom  visible={isVisible} onClose={()=> setIsVisble(false)}/>


 
  </>

  );
}
