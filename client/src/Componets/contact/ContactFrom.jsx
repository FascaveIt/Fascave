import {React,useState} from 'react'

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
     
      <div className='w-[500px] font'>
       {/* Contact Form Section */}
        <div className="formSection">
         <div className='flex justify-between mb-5'><h2 className='text-[#262262] font-semibold text-[26px]'>Contact</h2>
          <button className='cusror-pointer' onClick={()=> setContact(false)}><img src={cross} alt="" /></button></div> 

<form onSubmit={contacthandler} className="form">
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
  )
}

export default ContactFrom