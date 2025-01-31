import React from "react";
import Component from "../Asset/ServiceHero/component1.svg";
function Component1() {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between px-8 lg:px-16 py-12 bg-white">
      {/* Left Image Section */}
      <div className="w-full lg:w-1/2 flex justify-center">
        <img
          src={Component}
          alt="Web Developer Illustration"
          className="max-w-md"
        />
      </div>

      {/* Right Content Section */}
      <div className="w-full lg:w-1/2 mt-6 lg:mt-0">
        <h2 className="text-gray-700 text-xl font-semibold">
          Why U Choose Us As Your
        </h2>
        <h3 className="text-gray-700 text-xl font-semibold">
          in Amravati, Maharashtra
        </h3>

        <span className="inline-block bg-purple-700 text-white font-bold text-lg px-4 py-1 rounded-full mt-2">
          Web Development Company
        </span>

        <p className="text-gray-600 mt-4 text-base">
          A custom website offers numerous advantages over templated solutions.
          While pre-designed templates can get your website up and running
          quickly, they often lack the flexibility, scalability, and uniqueness
          needed to stand out in a competitive market. Custom website
          development ensures:
        </p>

        <ul className="list-disc list-inside text-gray-700 mt-4 space-y-2">
          <li>
            <strong>Personalized Design:</strong> Tailored to your brand’s
            identity, ensuring a distinctive look and feel.
          </li>
          <li>
            <strong>Enhanced Functionality:</strong> Incorporates features
            specific to your business needs.
          </li>
          <li>
            <strong>Scalability:</strong> Easily adapts as your business grows
            and evolves.
          </li>
          <li>
            <strong>Optimized Performance:</strong> Built for speed, security,
            and seamless user experience.
          </li>
          <li>
            <strong>SEO-Friendly:</strong> Designed to rank well on search
            engines, driving organic traffic.
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Component1;
