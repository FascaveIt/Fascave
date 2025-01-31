import React, { useState } from "react";
import Button from "../Button/Button";
import Shrekar from "../../Asset/ServiceHero/Shrekar.png";
import Wakeupbeverages from "../../Asset/ServiceHero/Wakeupbeverages.png";

const HeroSection = ({ title, description, image, highlight }) => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between px-6 sm:px-10 md:px-16 py-12 bg-white">
      {/* Left Content */}
      <div className="w-full lg:w-1/2 text-center lg:text-left">
        <div className="flex items-center justify-center lg:justify-start space-x-2">
          <div className="bg-indigo-900 text-white px-4 py-4 rounded-full text-lg sm:text-base font-semibold">
            We
          </div>
          <span className="text-gray-800 font-medium text-lg sm:text-2xl">
            Love To Solve Problems
          </span>
        </div>
        <h1 className="text-2xl sm:text-3xl md:text-4xl text-gray-600 mt-4 leading-snug">
          Created an E-commerce Website for{" "}
          <span
            className="text-4xl sm:text-5xl font-bold"
            style={{ color: highlight }}
          >
            {title}
          </span>
        </h1>
        <p className="text-lg sm:text-3xl text-gray-600 mt-4 leading-relaxed">
          {description}
        </p>
        <p className="text-base sm:text-xl font-medium text-gray-600 mt-2">
          LET US CREATE YOURS
        </p>

        {/* Button */}
        <div className="mt-6 flex justify-center sm:justify-start">
          <Button />
        </div>
      </div>

      {/* Right Image */}
      <div className="w-full lg:w-1/2 mt-10 lg:mt-0 flex justify-center">
        <img
          src={image}
          alt={title}
          className="max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg w-50% h-auto object-cover rounded-lg "
        />
      </div>
    </div>
  );
};

function ServiceHero() {
  const [activeSection, setActiveSection] = useState(0);

  const sections = [
    {
      title: "Sherekar Jewellers",
      description: "Where He Sells Their Jewelry For Seamless Shopping",
      highlight: "#D4AF37", // Gold color
      image: Shrekar,
    },
    {
      title: "Wake Up Beverages",
      description: "Where He Sells Their Product & Advertises His Company",
      highlight: "#FFD700", // Yellow color
      image: Wakeupbeverages,
    },
  ];

  return (
    <div className="container mx-auto px-4 sm:px-6 md:px-8">
      {sections.map((section, index) => (
        <div
          key={index}
          className={activeSection === index ? "block" : "hidden"}
        >
          <HeroSection {...section} />
        </div>
      ))}

      {/* Click Effect (Section Switcher) */}
      <div className="flex justify-center items-center mt-10 gap-4">
        {sections.map((_, index) => (
          <div
            key={index}
            className={`w-40 sm:w-40 h-3 rounded-full border border-black cursor-pointer transition-all duration-300 ${
              activeSection === index ? "bg-blue-700" : "bg-gray-300"
            }`}
            onClick={() => setActiveSection(index)}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default ServiceHero;
