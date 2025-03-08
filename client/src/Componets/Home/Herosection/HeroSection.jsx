import React, { useEffect, useState } from "react";
import "./HeroSection.css"; // Include custom CSS for animation
import background_animation from "../../../Asset/imagesWeb/background_animation.png"; // Import background animation image
import animati_image from "../../../Asset/imagesWeb/animati_image.png"; // Import background animation image

import { useNavigate } from "react-router-dom";
import Button from '../../Button/Button'
import ContactFrom from "../../contact/ContactFrom";
const HeroSection = () => {
  const navigate = useNavigate();
  const [textIndex, setTextIndex] = useState(0);
  const [fade, setFade] = useState(true); // State to control fade animation

  const texts = ["Website Development", "App Development", "SEO Optimization"];
const [contact, setContact] = useState(false);
  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false); // Start fade-out transition
      setTimeout(() => {
        setTextIndex((prevIndex) => (prevIndex + 1) % texts.length); // Update text
        setFade(true); // Start fade-in transition
      }, 500); // Allow fade-out to complete before updating text
    }, 3000); // Change text every 3 seconds (including fade transition time)

    return () => clearInterval(interval); // Clean up interval on component unmount
  }, [texts.length]);

  return (

    <>
      {contact && (
        <div className="fixed inset-0 flex items-center justify-center z-50 mt-10">
          <ContactFrom setContact={setContact}/>
        </div>
      )}   
    <div className="Hero relative bg-white  m-auto h-screen flex items-center justify-center ">
      <div className="animation absolute inset-0 bg-animation z-0">
        <img
          src={background_animation}
          alt=""
          className="mt-4 w-full h-[70vh]"
        />
      </div>
      <div className="Details relative z-10 container mx-auto flex flex-col lg:flex-row items-center justify-between px-6 lg:px-16">
        <div className="information text-center lg:text-left max-w-xl">
          <h1 className="h1 font-bold text-gray-900 leading-tight mb-4">
            CHOOSE THE PERFECT{" "}
            <span
              className={`span text-blue-500 transition-opacity duration-500 ${
                fade ? "opacity-100" : "opacity-0"
              }`}
            >
              {texts[textIndex]}
            </span>{" "}
            PARTNER WITH CONFIDENCE
          </h1>
          <p className="p text-gray-600  leading-relaxed mb-6 ">
            At Fascave, We Deliver Innovative Technology Solutions That Drive
            Business Growth. From Web And Mobile App Development To Cutting-Edge
            Data Analytics, We’re Your Trusted Partner In Digital
            Transformation. Let’s Bring Your Ideas To Life With Precision,
            Creativity, And Expertise.
          </p>
          <button className="bg-blue-950 hover:bg-[#666c81] text-white font-semibold text-sm py-2 px-6 rounded-full shadow herobutton" onClick={()=> setContact(true)}>
          Book a Free Consultation
        </button>
        </div>

        {/* Illustration Section */}
        <div className="Illustration  lg:mt-0">
          <img
            src={animati_image}
            alt="Illustration"
            className="w-full max-w-md lg:max-w-lg "
          />
        </div>
      </div>
    </div>
    </>

  );
};

export default HeroSection;
