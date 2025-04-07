import React, { useState } from "react";
import "./Contact.css";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section className="contact-section">
      <h2 className="section-title">Contact Us</h2>
      <div className="contact-container">
        {/* Left side: Location */}
        <div className="contact-location">
          <iframe
            title="location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434508616!2d144.95592831531682!3d-37.81720997975195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d5df1f78c89%3A0x5045675218ce7e33!2sMelbourne%20CBD%2C%20Victoria%2C%20Australia!5e0!3m2!1sen!2sus!4v1625272604425!5m2!1sen!2sus"
            width="100%"
            height="250"
            style={{ border: 0, borderRadius: "10px" }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
        {/* Right side: Contact Form */}
        <div className="contact-form-container">
          <div className="contact-info">
            <div className="info-item"><FaMapMarkerAlt /> <span>123 Fashion Street, NY, USA</span></div>
            <div className="info-item"><FaPhone /> <span>+1 234 567 890</span></div>
            <div className="info-item"><FaEnvelope /> <span>support@yourbrand.com</span></div>
            <div className="social-links">
              <a href="#" className="social-icon"><FaFacebook /></a>
              <a href="#" className="social-icon"><FaInstagram /></a>
              <a href="#" className="social-icon"><FaWhatsapp /></a>
            </div>
          </div>
          <form className="contact-form" onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required className="input-field" />
            <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required className="input-field" />
            <textarea name="message" placeholder="Your Message" value={formData.message} onChange={handleChange} required className="textarea-field" />
            <button type="submit" className="submit-button">Send Message</button>
            {submitted && <p className="success-message">Message sent successfully!</p>}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
