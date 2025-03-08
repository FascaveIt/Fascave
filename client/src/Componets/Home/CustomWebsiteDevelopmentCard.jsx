import React from "react";
import '../../App.css'
function CustomWebsiteDevelopmentCard(props) {
  return (
    <div className="w-full flex flex-col md:flex-row items-center rounded-lg p-6 space-y-6 md:space-y-0 md:space-x-6 bg-white">
      <div className="flex-1 text-left">
        <h2 className="text-2xl md:text-4xl font-medium text-[#262262]">
          {props.title}
        </h2>
        <p className="mt-2 text-base md:text-lg text-[#232323]">
          {props.description}
        </p>
        <hr className="my-4 w-full border-t-4 border-blue-600" />
        <ul className="mt-4 space-y-2 list-disc list-inside">
          {props.bulletPoints.map((item, index) => (
            <li key={index} className="flex items-center text-base md:text-lg text-[#232323]">
              {item}
            </li>
          ))}
        </ul>
      </div>
      <div className="flex-1 flex justify-center">
        <img
          src={props.image}
          alt={props.title}
          className="max-w-full h-auto object-contain"
        />
      </div>
    </div>
  );
}

export default CustomWebsiteDevelopmentCard;
