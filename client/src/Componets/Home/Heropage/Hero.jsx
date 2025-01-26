import React, { useEffect, useState } from "react";
import "./Hero.css";
import { Link } from "react-router-dom";
function Hero() {
  const [textIndex, setTextIndex] = useState(0);
  const [fade, setFade] = useState(true); // State to control fade animation

  const texts = ["Website Development", "App Development", "SEO Optimization"];

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
    <div>
      <div className="hero">
        <div className="details">
          <div className="text">
            <h1 className="">
              CHOOSE THE PERFECT{" "}
              <span
                className={`span text-[#138380] transition-opacity duration-700  ${
                  fade ? "opacity-510" : "opacity-0"
                }`}
              >
                {texts[textIndex]}
              </span>{" "}
              PARTNER WITH CONFIDENCE
            </h1>
            <p className="p text-gray-600  leading-relaxed mb-6 ">
              At Fascave, We Deliver Innovative Technology Solutions That Drive
              Business Growth.
            </p>
          </div>
        </div>
        <Link to="/contact" className="button">
          Contact us
        </Link>
      </div>
    </div>
  );
}

export default Hero;
