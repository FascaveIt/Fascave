import React from "react";
import '../../App.css'
function CustomWebsiteDevelopmentCard(props) {
  return (
    <div className="w-full flex flex-col   md:flex-row  items-center rounded-lg p-6 space-y-6 md:space-y-0 md:space-x-6 font" style={{backgroundColor: "white"}}>
      <div className="flex-1 text-left">
        <h2 className="text-[44px] font-medium  text-[#262262] text-inherit ">{props.title}</h2>
        <p className="text-[#232323] font-nor mt-2">{props.description}</p>
        <hr className="my-4 w-full border-t-4  border-blue-600" />
        <div className="mt-4 space-y-2">
          {props.bulletPoints.map((item, index) => (
            <p key={index} className="flex items-center text-[18px] text-[#232323]">
              • {item}
            </p>
          ))}
        </div>
      </div>

      
      <div className="flex-1 flex justify-center">
        <img src={props.image} alt={props.title} className="w-auto h-auto" />
      </div>
    </div>
  );
}

export default CustomWebsiteDevelopmentCard;
