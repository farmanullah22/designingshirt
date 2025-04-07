import React from "react";
import "./Footer.css"; // Import your CSS file for styling
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>About Us</h3>
          <p>AF Shirt Design provides high-quality, stylish shirts designed for comfort and fashion.</p>
        </div>
        <div className="footer-section">
          <h3>Contact</h3>
          <p>Email: support@afshirtdesign.com</p>
          <p>Phone: +123 456 7890</p>
        </div>
        <div className="footer-section">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="#" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
            <a href="#" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
            <a href="#" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2025 AF Shirt Design. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;