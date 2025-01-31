import React from 'react'
import ServiceHero from "../Componets/ServiceHero/ServiceHero";
import LetsTalk from "../Componets/LetsTalk";
import "remixicon/fonts/remixicon.css";
import OurClient from "../Componets/Home/Ourclients/OurClinet";
import Component1 from "../Componets/Component1";
import RightComp from "../Componets/RightComp";
import FAQ from "../Componets/Home/Faq";

export default function Services() {
  return (
    <div className="mt-[15vh] font-medium text-xl flex justify-center flex-col items-center">
      {/* Service Hero */}
      <div>
        <ServiceHero />
      </div>

      <div>
        <LetsTalk />
      </div>
      <div className="mt-5">
        <OurClient />
      </div>

      <div>
        <Component1 />
      </div>

      <div>
        <RightComp />
      </div>

      <div>
        <FAQ />
      </div>
    </div>
  );
}
