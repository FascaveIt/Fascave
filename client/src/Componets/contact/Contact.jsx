import React from "react";
import { MdLocationOn } from "react-icons/md";
import { FiPhoneCall } from "react-icons/fi";
import { CiMail } from "react-icons/ci";
import FAQ from "../Home/Faq";
import "./contact.css";

const Contact = () => {
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
              Maharashtra 44460
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
              <CiMail /> contact@fascaveit.com
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
          <form className="form">
            <input
              type="text"
              placeholder="First Name"
              className="inputFull"
              required
            />
            <input
              type="text"
              placeholder="Last Name"
              className="inputFull"
              required
            />
            <input
              type="email"
              placeholder="Email"
              className="inputFull"
              required
            />
            <input
              type="tel"
              placeholder="Phone Number"
              className="inputFull"
              required
            />
            <textarea
              placeholder="Your Query"
              className="textarea"
              required
            ></textarea>

            {/* Services Offered */}
            <h3 className="par">Services Offered</h3>
            <div className="services">
              <label>
                <input type="checkbox" /> Website Development
              </label>
              <label>
                <input type="checkbox" /> Digital Marketing
              </label>
              <label>
                <input type="checkbox" /> WhatsApp Business API
              </label>
              <label>
                <input type="checkbox" /> Application Development
              </label>
              <label>
                <input type="checkbox" /> Cloud Data Analytics
              </label>
              <label>
                <input type="checkbox" /> Power BI Visualization
              </label>
            </div>
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
