import React from 'react';
import { motion } from 'framer-motion';
import '../../App.css';

export default function WhyChooseUs() {
  return (
    <motion.div 
      className="bg-white w-3/4 m-auto py-16 font"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Section Title */}
      <div className="text-center mb-12">
        <h2 className="whyChoose">WHY CHOOSE US</h2>
        <p className="whyChoosePara">
          Choose Us For Tailored IT Solutions That Drive Success, With Expert
          Professionals Dedicated To Your Business Growth.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-6 px-8">
        {[ 
          { value: "6+", label: "Years Experience", color: "text-blue-400" },
          { value: "400+", label: "Projects Done", color: "text-purple-500" },
          { value: "24/7", label: "Team Support", color: "text-pink-500" },
          { value: "10+", label: "Industry Awards", color: "text-blue-400" },
          { value: "15+", label: "Core Professionals", color: "text-yellow-500" }
        ].map((item, index) => (
          <motion.div 
            key={index} 
            className="flex flex-col items-center bg-white shadow-md rounded-lg p-6"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            whileHover={{ scale: 1.05 }}
          >
            <h3 className={`text-3xl font-bold ${item.color} mb-2`}>{item.value}</h3>
            <p className="text-gray-600 text-sm">{item.label}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
