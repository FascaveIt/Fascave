import React from "react";
import APVA_logo from "../../../Asset/imagesWeb/APVA_logo.png";
import foodlex from "../../../Asset/imagesWeb/foodlex.png";
import hiltopTusuki from "../../../Asset/imagesWeb/hiltopTusuki.png";
import ikontech from "../../../Asset/imagesWeb/ikontech.png";
import shipdartexpress from "../../../Asset/imagesWeb/shipdartexpress.png";
import piotexventures from '../../../Asset/imagesWeb/Piotex-Ventures.png'
import piotexindustries from '../../../Asset/imagesWeb/PiotexIndustries.png'
import wakeup from "../../../Asset/imagesWeb/WakeUp.jpg"
import shetkari from "../../../Asset/imagesWeb/shetkari.png"
import "./OurClient.css";
import "../../../App.css"
export default function OurClient() {
  return (
    <div className="ourclients flex-col justify-center bg-white mb-10 font mt-20">
      {/* Section Title */}
      <h1 className="text-center text-[54px] font-semibold text-[#262262] mb-8">
        OUR CLIENTS
      </h1>

      {/* Infinite Scrolling Logos */}
      <div className="clients-logos w-screen m-auto relative overflow-hidden mt-10">
        <div className=" flex animate-scroll gap-10 items-center whitespace-nowrap">
          {/* Logos */}
          <img src={foodlex} alt="Foodlex" className="h-12" />
          <img src={ikontech} alt="Ikontech" className="h-12" />
          <img src={hiltopTusuki} alt="Hilltop Tsuki" className="h-12" />
          <img src={APVA_logo} alt="APVA Logo" className="h-12 " />
          <img src={foodlex} alt="Foodlex" className="h-12" />
          <img src={shipdartexpress} alt="APVA Logo" className="h-28 " />
          <img src={piotexventures} alt="APVA Logo" className="h-12 " />
          <img src={piotexindustries} alt="APVA Logo" className="h-12 " />
          <img src={wakeup}  alt="Wake Up" className="h-12 " />
          <img src={shetkari}  alt="shetkari" className="h-12 " />



        </div>
      </div>
    </div>
  );
}
