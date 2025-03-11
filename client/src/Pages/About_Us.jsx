import React from 'react'
import { motion } from "framer-motion";
import owner from "../Asset/ownerceo.jpg"
import { useNavigate } from 'react-router-dom';
export default function About_Us() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-6 md:px-20 mt-10">
      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0, y: -50 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.6 }}
        className="text-center py-16 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-3xl shadow-lg"
      >
        <h1 className="text-5xl font-bold">Welcome to Fascave</h1>
        <p className="text-lg mt-4 max-w-2xl mx-auto">
          Your trusted IT solutions partner, delivering cutting-edge technology and innovation.
          At FasCave IT Solutions, we are more than just a technology company – we are your dedicated partners in digital transformation. With over a decade of experience, we've been at the forefront of delivering bespoke IT solutions, specializing in web development, mobile applications, and strategic SEO services.
        </p>
      </motion.section>
      
      {/* Company Overview */}
      <motion.section 
        initial={{ opacity: 0, y: 50 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.6, delay: 0.3 }}
        className="bg-white shadow-md rounded-3xl p-10 mt-12 text-center"
      >
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Company Overview</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="p-6 bg-gray-50 rounded-xl shadow">
            <h3 className="text-2xl font-semibold text-gray-800">Founded</h3>
            <p className="text-gray-600">2019</p>
          </div>
          <div className="p-6 bg-gray-50 rounded-xl shadow">
            <h3 className="text-2xl font-semibold text-gray-800">Team Size</h3>
            <p className="text-gray-600">10 to 20+ Employees</p>
          </div>
          <div className="p-6 bg-gray-50 rounded-xl shadow">
            <h3 className="text-2xl font-semibold text-gray-800">Projects Completed</h3>
            <p className="text-gray-600">400+ Successful IT Solutions Delivered</p>
          </div>
        </div>
      </motion.section>
      
      {/* Founder Section */}
      <motion.section 
        initial={{ opacity: 0, x: -50 }} 
        animate={{ opacity: 1, x: 0 }} 
        transition={{ duration: 0.6, delay: 0.6 }}
        className="flex flex-col md:flex-row items-center bg-white shadow-md rounded-3xl p-10 mt-12"
      >
        <motion.img
          whileHover={{ scale: 1.05 }}
          src={owner}
          alt="Company Owner"
          className="w-48 h-48 rounded-full object-cover shadow-lg mb-6 md:mb-0 md:mr-8 border-4 border-gray-300"
        />
        <div className="text-center md:text-left">
          <h2 className="text-3xl font-semibold text-gray-900">Utkarsh Tadas</h2>
          <p className="text-gray-500 text-lg mb-3">Founder & CEO</p>
          <p className="text-gray-600 max-w-lg">
            John is a visionary leader in the IT industry, dedicated to transforming businesses through technology.
          </p>
        </div>
      </motion.section>
      
      {/* Mission & Vision */}
      <motion.section 
        initial={{ opacity: 0, y: 50 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.6, delay: 0.9 }}
        className="bg-white shadow-md rounded-3xl p-10 mt-12 text-center"
      >
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission & Vision</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Our mission is to drive innovation and empower businesses with scalable IT solutions. We aim to be a global leader in technology.
        </p>
      </motion.section>
      
      {/* Contact Section */}
      <motion.section 
      initial={{ opacity: 0, y: 50 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.6, delay: 1.2 }}
      className="bg-gradient-to-r from-indigo-600 to-blue-500 shadow-md rounded-3xl p-12 mt-12 text-center text-white"
    >
      <motion.h2 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 1.4 }}
        className="text-4xl font-bold mb-4"
      >
        Let's Connect
      </motion.h2>
      
      <motion.p 
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 1.6 }}
        className="text-lg max-w-lg mx-auto mb-6"
      >
        Have a project in mind? Need IT solutions? We’d love to hear from you!
      </motion.p>
      
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        <motion.div whileHover={{ scale: 1.05 }} className="bg-white bg-opacity-10 p-6 rounded-xl shadow-lg">
          <p className="text-lg flex items-center justify-center gap-2">
            <i className="fas fa-building text-blue-300"></i> 
            <strong>Company Type:</strong> IT Service-Based
          </p>
        </motion.div>
        <motion.div whileHover={{ scale: 1.05 }} className="bg-white bg-opacity-10 p-6 rounded-xl shadow-lg">
          <p className="text-lg flex items-center justify-center gap-2">
            <i className="fas fa-phone text-green-300"></i> 
            <strong>Phone:</strong> +91 9209755990
          </p>
        </motion.div>
        <motion.div whileHover={{ scale: 1.05 }} className="bg-white bg-opacity-10 p-6 rounded-xl shadow-lg">
          <p className="text-lg flex items-center justify-center gap-2">
            <i className="fas fa-globe text-yellow-300"></i> 
            <strong>Email:</strong> 
            <a href="

" className="text-white underline">contact@fascave.com</a>
          </p>
        </motion.div>
        <motion.div whileHover={{ scale: 1.05 }} className="bg-white bg-opacity-10 p-6 rounded-xl shadow-lg">
          <p className="text-lg flex items-center justify-center gap-2">
            <i className="fas fa-map-marker-alt text-red-300"></i> 
            <strong>Location:</strong> Pune, Maharashtra
          </p>
        </motion.div>
      </div>
      
      <motion.button 
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="mt-8 bg-white text-indigo-600 px-6 py-3 rounded-full text-lg font-semibold shadow-md hover:bg-gray-100 transition"
      onClick={()=> navigate('/contact') }
      >
        Contact Us
      </motion.button>
    </motion.section>
    </div>
  );
}
