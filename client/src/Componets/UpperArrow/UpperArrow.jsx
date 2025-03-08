import React, { useState, useEffect } from 'react';
import '../../App.css';
const UpperArrow = () => {
  // added state to track scroll position visibility
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShow(true);
      } else {
        setShow(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  if (!show) return null; // only render when scrolled sufficiently

  return (
    <button 
      onClick={handleClick} 
      className="fixed bottom-20 right-5 bg-blue-950 text-white p-3 rounded-full shadow-lg hover:bg-blue-900 transition z-10 circle"
    >
      <svg 
        className="w-6 h-6" 
        fill="none" 
        stroke="currentColor" 
        viewBox="0 0 24 24"
      >
        <path 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          strokeWidth={2} 
          d="M5 15l7-7 7 7" 
        />
      </svg>
    </button>
  );
};

export default UpperArrow;
