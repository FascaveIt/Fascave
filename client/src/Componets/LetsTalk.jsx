import React from "react";

function LetsTalk() {
  return (
    <div>
      <div className="my-8 bg-[#262262] flex flex-col items-center p-12">
        <h2 className="text-white text-center text-xl font-thin p-8">
          Congratulations! You have struck gold. As web design and
          development experts catering to the needs of people in Gujarat,
          we are here to create your digital success. We will define goals,
          understand audiences, and create an online presence for you.
          Let's begin the journey with a conversation.
        </h2>
        <button className=" border border-black text-white px-5 py-1 rounded-lg text-lg font-thin ">
          Let's talk{" "}
          <i className="text-white font-thin ri-arrow-right-long-line"></i>
        </button>
      </div>
    </div>
  );
}

export default LetsTalk;
