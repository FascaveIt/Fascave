import React from 'react'
import FAQ from '../Componets/Home/Faq';

export default function About_Us() {
  return (
    <div className="min-h-screen     bg-[#FEFEFF] flex flex-col items-center justify-center p-4">
      <header className="w-full text-center py-4">
        <h1 className="text-4xl text-white font-bold">About Us</h1>
      </header>
      <section className="bg-white rounded-lg shadow-lg p-6 max-w-3xl w-full">
        <p className="text-gray-700 text-base md:text-lg">
          Welcome to our company. We are committed to providing the best service possible.
        </p>
      </section>
      <section className="mt-6 flex flex-col md:flex-row gap-4 max-w-3xl w-full">
        <div className="flex-1 bg-white rounded-lg shadow p-4">
          <h2 className="text-2xl font-semibold text-gray-800">Our Mission</h2>
          <p className="text-gray-600 mt-2">
            To deliver innovative solutions that drive success.
          </p>
        </div>
        <div className="flex-1 bg-white rounded-lg shadow p-4">
          <h2 className="text-2xl font-semibold text-gray-800">Our Vision</h2>
          <p className="text-gray-600 mt-2">
            To be the leading provider in our industry while making a positive impact.
          </p>
        </div>
      </section>

      <div><FAQ/></div>
    </div>
  );
}
