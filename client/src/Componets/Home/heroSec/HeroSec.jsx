import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Prayesh from "../../../Asset/testimonialclient/Prayesh.png";
import AbhayGaikwad from "../../../Asset/testimonialclient/Abhay-Gaikwad.png";
import apva from "../../../Asset/testimonialclient/apva.png";
import "./HeroSec.css";

const HeroSec = () => {
  const navigate = useNavigate();
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
  const [feedbacks, setFeedbacks] = useState([
    {
      img: Prayesh,
      name: "Prayesh",
      message:
        "Fascave made the website for us and we are very happy with the results, I would recommend them to anyone looking for a website. Go Straight to Fascave.",
    },
    {
      img: AbhayGaikwad,
      name: "Abhay-Gaikwad",
      message:
        "The team did an amazing job on our platform. It’s user-friendly, feature-packed, and well-designed. Highly recommended!",
    },
    {
      img: apva,
      name: "Apva",
      message:
        "Superb And Efficient Work. They Developed An Android App For Our Community Directory. We Are Very Happy With The Finished Product. Well Designed, Lots Of Features, Top Of The Line Product",
    },
    // Add more feedback objects here
  ]);

  const [selectedFeedback, setSelectedFeedback] = useState(null);

  const handleFeedbackClick = (index) => {
    setSelectedFeedback(index === selectedFeedback ? null : index);
  };

  return (
    <div className="career-solution">
      <h1>
        One And Only Solution For,{" "}
        <span
          className={`span text-[#138380] transition-opacity duration-500 ${
            fade ? "opacity-100" : "opacity-0"
          }`}
        >
          {texts[textIndex]}
        </span>{" "}
      </h1>
      <p>
        At Fascave, We Deliver Innovative Technology Solutions That Drive
        Business Growth.
      </p>
      <button onClick={() => navigate("/contact")} className="waitlist-btn">
        <span>Book a Free Consultation</span>
        <span className="arrow">→</span>
      </button>

      <div className="circles">
        {feedbacks.map((feedback, index) => (
          <div
            key={index}
            className="circle"
            onClick={() => handleFeedbackClick(index)}
          >
            <div className="Logo">
              <img src={feedback.img} alt={feedback.name} />
            </div>
            <div className="names">
              <h1>{feedback.name}</h1>
              {selectedFeedback === index && <p>{feedback.message}</p>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeroSec;
