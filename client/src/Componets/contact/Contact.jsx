import React, { useState } from "react";
import { MdLocationOn } from "react-icons/md";
import { FiPhoneCall } from "react-icons/fi";
import { CiMail } from "react-icons/ci";
import FAQ from "../Home/Faq";
import { collection, addDoc } from "firebase/firestore";
import "./contact.css";
import { useNavigate } from "react-router-dom";
import db from "../../../config/Config";

import { toast } from "react-toastify";
const Contact = () => {
  const [FirstName, setFirstName] = useState("");
  const [LastName, setLastName] = useState("");
  const [Email, setEmail] = useState("");
  const [PhoneNumber, setPhoneNumber] = useState("");
  const [Query, setQuery] = useState("");

  const navigate = useNavigate();
  const contacthandler = async (e) => {
    e.preventDefault();

    try {
      await addDoc(collection(db, "Contacts"), {
        FirstName,
        LastName,
        Email,
        PhoneNumber,
        Query,
      });
      toast.success("Message Send successfully!");
      setFirstName("");
      setLastName("");
      setEmail("");
      setPhoneNumber("");
      setQuery("");
      navigate("/");
    } catch (error) {
      toast.error("Error in Sendig: ", error);
    }
  };
  return (
    <>
      <div className="contactContainer">
        {/* Contact Information Section */}
        <div className="infoSection">
          <h2 className="heading">Contact Us</h2>

          {/* Address */}
          <div className="infoItem">
            <span className="icon">
              <MdLocationOn />
              Address
            </span>
            <p className="par">
              First Floor, Govind Complex, B, 127, Pote Patil Rd, Amravati,
              Maharashtra 444604
            </p>
          </div>
          {/* Call us */}
          <div className="infoItem">
            <span className="icon">Call Us</span>
            <h6 className="subHeading">Call our team Mon-Fri 10Am to 7Pm</h6>
            <p className="contactDetail">
              <FiPhoneCall />
              +91 9209755990
            </p>
          </div>

          {/* Mail us */}
          <div className="infoItem">
            <span className="icon">Email Us</span>
            <h6 className="subHeading">Mail our team Mon-Fri 10Am to 7Pm</h6>
            <p className="contactDetail">
              <CiMail /> contact@fascave.com
            </p>
          </div>

          {/* Join Our Team */}
          <div className="infoItem">
            <span className="icon">Join Our Team</span>
            <h6 className="subHeading">Mail your resume to:</h6>
            <p className="contactDetail">
              <CiMail /> hr@fascave.com
            </p>
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="formSection">
          <h2 className="heading">Get In Touch</h2>
          <form className="form" onSubmit={contacthandler}>
            <input
              type="text"
              placeholder="First Name"
              value={FirstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="inputFull"
              required
            />
            <input
              type="text"
              placeholder="Last Name"
              value={LastName}
              onChange={(e) => setLastName(e.target.value)}
              className="inputFull"
              required
            />
            <input
              type="email"
              placeholder="Email"
              value={Email}
              onChange={(e) => setEmail(e.target.value)}
              className="inputFull"
              required
            />
            <input
              type="tel"
              placeholder="Phone Number"
              value={PhoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              className="inputFull"
              required
            />
            <textarea
              placeholder="Your Query"
              value={Query}
              onChange={(e) => setQuery(e.target.value)}
              className="textarea"
              required
            ></textarea>

          
            <button type="submit" className="contactButton">
              Submit Form
            </button>
          </form>
        </div>
      </div>

      <FAQ />
    </>
  );
};

export default Contact;
