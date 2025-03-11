import React from "react";
import { motion } from "framer-motion";
import "./scrolingcardRight.css";
import '../../../App.css';
import image1 from "../../../Asset/imagesWeb/OurProtfolio/Rectangle6.png";
import image2 from "../../../Asset/imagesWeb/OurProtfolio/Rectangle7.png";
import image3 from "../../../Asset/imagesWeb/OurProtfolio/Rectangle8.png";
import image4 from "../../../Asset/imagesWeb/OurProtfolio/Rectangle9.png";

import ProductShowcaseCard from "../ProductShowcaseCard";

export default function OurPortfolioScrollRight() {
  const cardDetails = [
    {
      title: "Wake UP Water",
      description: "Reawakening the world with the pure hydration.",
      image: image1,
    },
    {
      title: "Sherekar Jewelers",
      description:
        "Illuminating your world with art of timeless craftsmanship.",
      image: image2,
    },
    {
      title: "APVA Association",
      description: "Capturing moments, empowering your visual storytelling.",
      image: image3,
    },
    {
      title: "Hilltop Tuski",
      description: "Connecting Japan & India for exceptional business growth.",
      image: image4,
    },
  ];

  return (
    <motion.div 
      className="Portfolio-container mt-36 font"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h1 className="OurPortfolio font">OUR PORTFOLIO</h1>
      <p className=" font">
        Discover our outstanding expertise in delivering services across a
        diverse range of dynamic industries
      </p>
      <div className="container flex justify-center">
        <ul id="cards" className="flex">
          {cardDetails.map((card, index) => (
            <motion.li 
              className="card w-full" 
              key={index} 
              id={`card${index + 1}`}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
            >
              <ProductShowcaseCard
                title={card.title}
                description={card.description}
                image={card.image}
              />
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}
