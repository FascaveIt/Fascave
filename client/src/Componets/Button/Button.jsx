import React from "react";
import "./Button.css";
import { MdOutlineCallEnd } from "react-icons/md";
import { useNavigate } from "react-router-dom";
function Button() {
  const navigate = useNavigate();
  return (
    <div>
      <button
        className="button bg-blue-950 text-white px-6 py-3 rounded-2xl shadow-lg font-semibold flex items-center gap-1"
        onClick={() => navigate("/contact")}
      >
        <MdOutlineCallEnd className="call" />
        Book a Free Consultation
      </button>
    </div>
  );
}

export default Button;
