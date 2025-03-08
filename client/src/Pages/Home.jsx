import React, { useState } from "react";
import OurClient from "../Componets/Home/Ourclients/OurClinet";
import OurPatners from "../Componets/Home/OurPatners";
import WhyChooseUs from "../Componets/Home/WhyChooseUs";

import HeroSection from "../Componets/Home/Herosection/HeroSection";
import OurPortfolioScrollRight from "../Componets/Home/Portfolio/OurPortfolioScrollRight";
import ScrolingCard from "../Componets/Home/Ourservices/ScrolingCard";
import FAQ from "../Componets/Home/Faq";



export default function Home() {
  return (
    <div >
   <div >  <HeroSection /></div>
    
      {/* <HeroSec /> */}
      <div>  <OurClient /></div>
    
      <div><ScrolingCard /></div>
      <div><OurPortfolioScrollRight /></div>
      
      <div>   <WhyChooseUs /></div>
   

      <div><OurPatners /></div>
      
      {/* <ClientTestimonials /> */}
      <div>
      <FAQ />
      </div>

    </div>
  );
}
