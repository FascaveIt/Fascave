import React, { useState } from "react";
import { motion } from "framer-motion";
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
      toast.success("Message Sent successfully!");
      setFirstName("");
      setLastName("");
      setEmail("");
      setPhoneNumber("");
      setQuery("");
      navigate("/");
    } catch (error) {
      toast.error("Error in Sending: ", error);
    }
  };
  return (
    <>
      <motion.div 
        className="contactContainer font"
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ duration: 0.8 }}
      >
        <motion.div 
          className="infoSection"
          initial={{ x: -50 }} 
          animate={{ x: 0 }} 
          transition={{ duration: 0.6 }}
        >
          <h2 className="heading">Contact Us</h2>

          <motion.div className="infoItem" whileHover={{ scale: 1.05 }}>
            <span className="icon"><MdLocationOn /> Address</span>
            <p className="par">First Floor, Govind Complex, B, 127, Pote Patil Rd, Amravati, Maharashtra 444604</p>
          </motion.div>

          <motion.div className="infoItem" whileHover={{ scale: 1.05 }}>
            <span className="icon">Call Us</span>
            <h6 className="subHeading">Call our team Mon-Fri 10Am to 7Pm</h6>
            <p className="contactDetail"><FiPhoneCall /> +91 9209755990</p>
          </motion.div>

          <motion.div className="infoItem" whileHover={{ scale: 1.05 }}>
            <span className="icon">Email Us</span>
            <h6 className="subHeading">Mail our team Mon-Fri 10Am to 7Pm</h6>
            <p className="contactDetail"><CiMail /> contact@fascave.com</p>
          </motion.div>

          <motion.div className="infoItem" whileHover={{ scale: 1.05 }}>
            <span className="icon">Join Our Team</span>
            <h6 className="subHeading">Mail your resume to:</h6>
            <p className="contactDetail"><CiMail /> hr@fascave.com</p>
          </motion.div>
        </motion.div>

        <motion.div 
          className="formSection"
          initial={{ x: 50 }} 
          animate={{ x: 0 }} 
          transition={{ duration: 0.6 }}
        >
          <h2 className="heading">Get In Touch</h2>
          <form className="form" onSubmit={contacthandler}>
            <motion.input whileFocus={{ scale: 1.05 }} type="text" placeholder="First Name" value={FirstName} onChange={(e) => setFirstName(e.target.value)} className="inputFull" required />
            <motion.input whileFocus={{ scale: 1.05 }} type="text" placeholder="Last Name" value={LastName} onChange={(e) => setLastName(e.target.value)} className="inputFull" required />
            <motion.input whileFocus={{ scale: 1.05 }} type="email" placeholder="Email" value={Email} onChange={(e) => setEmail(e.target.value)} className="inputFull" required />
            <motion.input whileFocus={{ scale: 1.05 }} type="tel" placeholder="Phone Number" value={PhoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} className="inputFull" required />
            <motion.textarea whileFocus={{ scale: 1.05 }} placeholder="Your Query" value={Query} onChange={(e) => setQuery(e.target.value)} className="textarea" required></motion.textarea>
            <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} type="submit" className="contactButton">Submit Form</motion.button>
          </form>
        </motion.div>
      </motion.div>
      <FAQ />
    </>
  );
};

export default Contact;
