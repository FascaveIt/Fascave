import React from 'react';
import '../../App.css'
function ProductShowcaseCard(props) {
  return (
    <div className="">
      <div className="w-11/12 hover:bg-slate-100 hover:p-7 p-6 flex flex-col items-center justify-center bg-white shadow-lg rounded-xl max-w-lg mx-auto font">
        <div className="flex justify-center mb-6">
          <img
            src={props.image}
            alt="Wake UP Water Showcase"
            className="rounded-lg w-full"
          />
        </div>

        <h2 className="text-[26px] md:text-3xl font-medium text-[#262262] mb-2">
          {props.title}
        </h2>
        <p className="text-[18px] font-normal text-[#4b5563] text-center">{props.description}</p>
      </div>
    </div>
  );
}

export default ProductShowcaseCard;
