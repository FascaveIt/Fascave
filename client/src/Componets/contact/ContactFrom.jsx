import { React, useState } from 'react'
import { motion } from "framer-motion";
import { collection, addDoc } from "firebase/firestore";
import "./contact.css";
import { useNavigate } from "react-router-dom";
import db from "../../../config/Config";
import cross from '../../Asset/cross.svg'
import { toast } from "react-toastify";
function ContactFrom({ setContact }) {
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
          navigate("/")
          setFirstName("");
          setLastName("");
          setEmail("");
          setPhoneNumber("");
          setQuery("");
          setContact(false)
        } catch (error) {
          toast.error("Error in Sendig: ", error);
        }
      };
  return (
      <div className="w-full max-w-md mx-auto bg-white p-6 rounded-md shadow-md">
       {/* Contact Form Section */}
        <div className="mb-6 w-[400px]">
         <div className='flex justify-between items-center mb-5'>
           <h2 className='text-blue-950 font-semibold text-2xl'>Contact</h2>
           <button className='cursor-pointer' onClick={()=> setContact(false)}>
             <img src={cross} alt="close" />
           </button>
         </div> 
   
         
          <form className="form" onSubmit={contacthandler}>
            <motion.input whileFocus={{ scale: 1.05 }} type="text" placeholder="First Name" value={FirstName} onChange={(e) => setFirstName(e.target.value)} className="inputFull" required />
            <motion.input whileFocus={{ scale: 1.05 }} type="text" placeholder="Last Name" value={LastName} onChange={(e) => setLastName(e.target.value)} className="inputFull" required />
            <motion.input whileFocus={{ scale: 1.05 }} type="email" placeholder="Email" value={Email} onChange={(e) => setEmail(e.target.value)} className="inputFull" required />
            <motion.input whileFocus={{ scale: 1.05 }} type="tel" placeholder="Phone Number" value={PhoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} className="inputFull" required />
            <motion.textarea whileFocus={{ scale: 1.05 }} placeholder="Your Query" value={Query} onChange={(e) => setQuery(e.target.value)} className="textarea" required></motion.textarea>
            <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} type="submit" className="contactButton">Submit Form</motion.button>
          </form>
     
        </div>
      </div>
  )
}
export default ContactFrom