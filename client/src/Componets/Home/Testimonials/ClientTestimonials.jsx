import React from "react";
import ClientCard from "./ClientCard";
import "./Testimonials.css";

export default function ClientTestimonials() {
  const clientData = [
    {
      id: 1,
      para: "Superb And Efficient Work. They Developed An Android App For Our Community Directory. We Are Very Happy With The Finished Product. Well Designed, Lots Of Features, Top Of The Line Product",
      name: "Prayesh Wankhade",
      position: "Founder (Fast Food)",
      image: "https://via.placeholder.com/64?text=Image+1",
    },
    {
      id: 2,
      para: "They provided excellent service and delivered the project on time. The app design and functionality exceeded our expectations!",
      name: "John Doe",
      position: "CEO (Tech Solutions)",
      image: "https://via.placeholder.com/64?text=Image+2",
    },
    {
      id: 3,
      para: "The team did an amazing job on our platform. It’s user-friendly, feature-packed, and well-designed. Highly recommended!",
      name: "Jane Smith",
      position: "Founder (Health Connect)",
      image: "https://via.placeholder.com/64?text=Image+3",
    },
  ];

  return (
    <div className="Testimonials flex-col justify-center bg-white py-10 ">
      <h1 className="OurTestimonials text-center text-3xl font-bold text-blue-950 mb-8">
        OUR CLIENTS Testimonials
      </h1>

      <p className="ourtestimonialsp w-1/2 m-auto text-center text-xl text-gray-600  mb-8">
        Our client testimonials showcase the trust and success we've built
        through unparalleled value and unique experiences.
      </p>

      {/* Infinite Scrolling Logos */}
      <div className="ourtestimonials-clients w-3/4 m-auto relative overflow-hidden">
        <div className="ourtetimonialscards flex animate-scroll gap-10 items-center whitespace-nowrap">
          {clientData.map((client) => (
            <ClientCard
              key={client.id}
              para={client.para}
              name={client.name}
              position={client.position}
              image={client.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
