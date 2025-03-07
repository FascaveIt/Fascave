import React, { useState } from "react";
import { RiArrowDownSLine } from "react-icons/ri";
import { RiArrowUpSLine } from "react-icons/ri";
import '../../App.css'
const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    "What services does Fascave IT Solutions provide?",
    "How can Fascave IT Solutions help with digital transformation?",
    "Do you provide customized website development?",
    "What technologies do you use for web and mobile app development?",
    "How does your SEO service work?",
    "Do you work with startups?",
    "What is your project development process?",
    "How much does it cost to develop a website or app?",
    "Do you offer support and maintenance after project completion?",
    "How can I get in touch with Fascave IT Solutions?",
  ];

  const answers = [
    "We provide a range of services, including website development, mobile app development, SEO, digital marketing, and IT consulting.",
    "We analyze your business goals and implement the latest technologies to streamline your operations, improve efficiency, and enhance customer experiences.",
    "Yes, we specialize in creating customized websites tailored to your specific requirements and business needs.",
    "We use modern technologies such as React, Node.js, Angular, Flutter, and more to deliver cutting-edge web and mobile applications.",
    "Our SEO service involves optimizing your website for search engines by using targeted keywords, improving site structure, and creating quality content to enhance visibility.",
    "Yes, we love working with startups! We provide tailored solutions to help them establish their digital presence and scale effectively.",
    "Our process includes requirement analysis, project planning, design, development, testing, deployment, and support.",
    "The cost depends on various factors like project complexity, features, and timeline. Contact us for a detailed quote based on your requirements.",
    "Yes, we offer comprehensive support and maintenance services to ensure your project runs smoothly post-completion.",
    "You can reach out to us through our contact form on our website, via email, or by calling our customer support team.",
  ];

  return (
    <div className="max-w-4xl m-auto p-6 font-poppins font">
     <h2 className="text-[44px] text-center font-semibold text-[#262262] mb-4">
        FREQUENTLY ASKED QUESTIONS
      </h2>
      <p className="text-center text-[#232323] mb-6 sm:text-base text-[24px]">
        Our Frequently Asked Questions Are Designed To Provide Quick, Insightful
        Solutions To Your Queries.
      </p>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border border-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full text-left px-4 py-3 flex justify-between items-center bg-white"
            >
              <span className="font-medium">{`Q${index + 1}. ${faq}`}</span>
              <span className="text-xl text-purpleText font-bold">
                {activeIndex === index ? (
                  <RiArrowUpSLine />
                ) : (
                  <RiArrowDownSLine />
                )}
              </span>
            </button>
            {activeIndex === index && (
              <div className="px-4 py-3 bg-white text-gray-700 shadow-inner">
                <p>{answers[index]}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
