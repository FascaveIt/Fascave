import React from "react";
import {
  FaInstagram,
  FaFacebookF,
  FaXTwitter,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa6";
import { TiSocialPinterest } from "react-icons/ti";
import { FiPhoneCall } from "react-icons/fi";
import { CiMail } from "react-icons/ci";
import { GrMapLocation } from "react-icons/gr";
import '../../App.css'
import { Link, NavLink } from "react-router-dom";
const socialLinks = [
  {
    icon: <FaFacebookF />,
    label: "Facebook",
    color: "text-black",
    link: "https://www.facebook.com/fascaveit",
  },
  {
    icon: <FaXTwitter />,
    label: "Twitter",
    color: "text-black",
    link: "https://x.com/fascaveit",
  },
  {
    icon: <TiSocialPinterest />,
    label: "Pinterest",
    color: "text-black",
    link: "https://in.pinterest.com/fascave/",
  },
  {
    icon: <FaLinkedinIn />,
    label: "LinkedIn",
    color: "text-black",
    link: "https://www.linkedin.com/company/fascave/",
  },
  {
    icon: <FaInstagram />,
    label: "Instagram",
    color: "text-black",
    link: "https://www.instagram.com/fascave.it/",
  },
  {
    icon: <FaYoutube />,
    label: "YouTube",
    color: "text-black",
    link: "https://www.youtube.com/@fascave.it.solutions",
  },
];


const Footer = () => {
   const footerlink =[
     {name:"Home",
      link:"#"},
      {name:"Careers",
        link:"https://jobs.fascave.com/jobs/Careers"}, 
        {name:"About",
          link:"/About_Us"},
           {name:"Contact",
            link:"/contact"},     ]


            const servicePage=[
              {
                name:"Web Development",
                link:"/services/web-development"
              },
              {
                name:"App Development",
                link:"/services/app-development"
              },
              {
                name:"Digital Marketing",
                link:"/services/digital-marketing"
              },
              {
                name:"Cloud Data Analytics",
                link:"/services/cloud-data-analytics"
              },
              {
                name:"Power & BI Visualization Services",
                link:"/services/Power&BI"
              }

            ]

  return (
    <footer className="bg-gray-100 text-gray-800 py-10 font">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-14 ">
          {/* Company Description */}
          <div>
            <img
              src="/Images/FascaveLogo.png"
              alt="FasCave Logo"
              className="mt-[-4vh] w-36  mb-[-3vh] "
            />
            <p className="text-sm leading-relaxed ">
              Best Software Company in Pune-Amravati-India | Website Development
              | App Development | Digital Marketing | WhatsApp Business API |
              Cloud Data Analytics | Power & BI Visualization | FasCave IT
              Solutions
            </p>
            <div className="flex space-x-3 mt-4">
              {socialLinks.map(({ icon, label, color, link }, index) => (
                <a
                  key={index}
                  href={link}
                  aria-label={label}
                  className={`bg-white ${color} rounded-full p-3 shadow-md hover:bg-gray-200 transition`}
                >
                  <i className="w-5 h-5">{icon}</i>
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-1 text-sm flex flex-col">
           { servicePage.map((service, index) => (
                <NavLink key={index} to={service.link}>{service.name}</NavLink>
              ))}
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-4 text-sm">
              <p className="flex items-start gap-2">
                <GrMapLocation className="text-blue-400 w-10 h-6 mt-1" />
                FasCave IT Solutions Private Limited First Floor, Govind Complex
                B, 127, Pote Patil Rd, Amravati, Maharashtra 444604
              </p>
              <p className="flex items-center gap-2">
                <FiPhoneCall className="text-blue-400 w-6 h-6" />
                +91 9209755990
              </p>
              <p className="flex items-center gap-2">
                <CiMail className="text-blue-400 w-6 h-6" />
                support@fascave.com
              </p>
            </div>
          </div>

          {/* Proud Partners */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Proud Partners</h3>
            <div className=" rounded-md">
              <img
                src="/Images/background.png"
                alt="Microsoft for Startups"
                className="w-full"
              />
            </div>
          </div>
        </div>

        <div className="border-t border-gray-300 mt-8 pt-4 flex flex-col md:flex-row justify-between items-center text-sm">
          <p>© 2025 All Rights Reserved By FasCave IT Solutions Pvt. Ltd.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            {
           footerlink.map((item,index) => (
              <Link
                key={index}
                 to={item.link}
                className="hover:underline hover:text-blue-500"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
