import React from "react";
import OurClient from "../Componets/Home/Ourclients/OurClinet";
import OurPatners from "../Componets/Home/OurPatners";
import WhyChooseUs from "../Componets/Home/WhyChooseUs";
import ClientTestimonials from "../Componets/Home/ClientTestimonials";
import HeroSection from "../Componets/Home/Herosection/HeroSection";
import OurPortfolioScrollRight from "../Componets/Home/OurPortfolioScrollRight";
import ScrolingCard from "../Componets/Home/Ourservices/ScrolingCard";
import FAQ from "../Componets/Home/Faq";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <OurClient />
      <ScrolingCard />
      <OurPortfolioScrollRight />
      <WhyChooseUs />
      <OurPatners />
      <ClientTestimonials />
      <FAQ />
    </div>
  );
}
