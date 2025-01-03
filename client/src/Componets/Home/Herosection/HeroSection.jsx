import React from "react";
import "./HeroSection.css"; // Include custom CSS for animation
import background_animation from "../../../Asset/imagesWeb/background_animation.png"; // Import background animation image
import animati_image from "../../../Asset/imagesWeb/animati_image.png"; // Import background animation image
import { MdOutlineCallEnd } from "react-icons/md";

const HeroSection = () => {
  return (
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
          <h1 className="h1 text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-4">
            CHOOSE THE PERFECT{" "}
            <span className="span text-blue-500">WEBSITE DEVELOPMENT</span>{" "}
            PARTNER WITH CONFIDENCE
          </h1>
          <p className="p text-gray-600 text-lg leading-relaxed mb-6 ">
            At Fascave, We Deliver Innovative Technology Solutions That Drive
            Business Growth. From Web And Mobile App Development To Cutting-Edge
            Data Analytics, We’re Your Trusted Partner In Digital
            Transformation. Let’s Bring Your Ideas To Life With Precision,
            Creativity, And Expertise.
          </p>
          <button className="button bg-blue-950 text-white px-6 py-3 rounded-2xl shadow-lg font-semibold flex items-center gap-1">
            <MdOutlineCallEnd className="call" />
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
  );
};

export default HeroSection;
