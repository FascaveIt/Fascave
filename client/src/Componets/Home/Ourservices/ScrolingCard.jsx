import React from "react";
import "./ScrolingCard.css";
import CustomWebsiteDevelopmentCard from "../CustomWebsiteDevelopmentCard";
import app from "../../../Asset/imagesWeb/scrolingCard/Rectangle1.png";
import digital from "../../../Asset/imagesWeb/scrolingCard/Rectangle2.png";
import whatapp from "../../../Asset/imagesWeb/scrolingCard/Rectangle3.png";
import anylesis from "../../../Asset/imagesWeb/scrolingCard/Rectangle4.png";
import bigData from "../../../Asset/imagesWeb/scrolingCard/Rectangle5.png";
import website from "../../../Asset/imagesWeb/scrolingCard/Rectangle6.png";
import "../../../App.css"
export default function ScrolingCard() {
  const cardDetail = [
    {
      title: "Custom Website Development",
      description:
        "Delivering custom website solutions designed to elevate your success.",
      bulletPoints: [
        "We craft designs and designs tailored to your unique business needs.",
        "Our skilled professionals ensure innovation and precision in every project.",
        "Trusted by industries to deliver results that drive growth.",
      ],
      image: website,
      bgColor: "yellow", // Yellow background
    },
    {
      title: "Custom Application Development",
      description:
        "Crafting custom application solutions to power your success & innovation.",
      bulletPoints: [
        "Custom applications tailored to your business, driving success.",
        "Utilizing the latest tech to take your business ahead and scalable.",
        "Effortlessly integrating with your systems for smooth and efficient workflows.",
      ],
      image: app,
      bgColor: "red", // Red background
    },
    {
      title: "Digital Marketing Services",
      description:
        "Driving growth and success with innovative digital marketing strategies.",
      bulletPoints: [
        "We focus on driving meaningful growth and long-term success for your business.",
        "Our creative approach ensures your brand stands out in the crowded digital space.",
        "We transform insights into impactful campaigns that deliver results.",
      ],
      image: digital,
      bgColor: "pink", // Pink background
    },
    {
      title: "WhatsApp Business API Services",
      description:
        "Enhancing your business with seamless WhatsApp API solutions for better communication.",
      bulletPoints: [
        "Establish direct connections with your customers through personalized support.",
        "Our innovative approach ensures your brand stands out in the crowded digital space.",
        "Expand your business with flexible API features that grow with you.",
      ],
      image: whatapp,
      bgColor: "orange", // Orange background
    },
    {
      title: "Power & BI Visualization Services",
      description:
        "Transforming your data into powerful insights with seamless Power BI visualization solutions.",
      bulletPoints: [
        "Transform raw data into interactive visualizations that reveal key business trends.",
        "Tailor-made dashboards provide real-time data for smart decision-making.",
        "Deliver clear, actionable insights that drive business success.",
      ],
      image: bigData,
      bgColor: "blue", // Blue background
    },
    {
      title: "Cloud Data Analytics Services",
      description:
        "Revolutionizing decision-making through cloud data analytics solutions.",
      bulletPoints: [
        "Modern cloud solutions drive data insights that empower smarter decision-making.",
        "Real-time analytics ensure you’re always ahead of your industry curve.",
        "Custom strategies provide data solutions that fuel business growth.",
      ],
      image: anylesis,
      bgColor: "green", // Green background
    },
  ];

  return (
    <div className="font mt-20">
      <h1 className="ourservices font">
        OUR SERVICES
      </h1>

      <p className="ourp font">
        Discover our outstanding expertise in delivering services across va
        diverse range of dynamic industries
      </p>
      <div className="container">
        <ul id="cards">
          {cardDetail.map((card, index) => (
            <li className="card" key={index} id={`card${index + 1}`}>
              <CustomWebsiteDevelopmentCard
                title={card.title}
                description={card.description}
                bulletPoints={card.bulletPoints}
                image={card.image}
                bgColor={card.bgColor}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
