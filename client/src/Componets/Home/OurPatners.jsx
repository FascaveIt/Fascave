import React from 'react';
import AWS from '../../Asset/imagesWeb/patners/AWS.png';
import Google_Cloud from '../../Asset/imagesWeb/patners/Google_Cloud.png';
import meta from '../../Asset/imagesWeb/patners/meta.png';
import Microsoft_Azure from '../../Asset/imagesWeb/patners/Microsoft_Azure.png';
import Microsoft_FasCave from '../../Asset/imagesWeb/patners/Microsoft_FasCave.png';

import '../../App.css'
// ... existing imports ...

export default function OurPatners() {
  return (
    <div className="flex-col justify-center bg-white py-6 sm:py-10 font">
      
      <h2 className="text-[54px] text-center font-semibold text-[#262262] mb-4">OUR GTM PARTNERS</h2>

      <p className="w-full sm:w-1/2 m-auto text-center text-[20px] text-[#232323] mb-8">
        Our strategic partners help us deliver unmatched business value and unique experiences
      </p>

      {/* Infinite Scrolling Logos */}
      <div className="w-[95%] sm:w-3/4 m-auto relative overflow-hidden">
        <div className="flex animate-scroll gap-4 sm:gap-10 items-center whitespace-nowrap">
          <img src={AWS} alt="AWS" className="h-12 sm:h-16" />
          <img src={Google_Cloud} alt="Google_Cloud" className="h-12 sm:h-16" />
          <img src={meta} alt="meta" className="h-12 sm:h-16" />
          <img src={Microsoft_Azure} alt="Microsoft_Azure" className="h-12 sm:h-16" />
          <img src={Microsoft_FasCave} alt="Microsoft_FasCave" className="h-12 sm:h-16" />
          
          <img src={AWS} alt="AWS" className="h-12 sm:h-16" />
          <img src={Google_Cloud} alt="Google_Cloud" className="h-12 sm:h-16" />
          <img src={meta} alt="meta" className="h-12 sm:h-16" />
          <img src={Microsoft_Azure} alt="Microsoft_Azure" className="h-12 sm:h-16" />
          <img src={Microsoft_FasCave} alt="Microsoft_FasCave" className="h-12 sm:h-16" />
        </div>
      </div>
    </div>
  );
}
