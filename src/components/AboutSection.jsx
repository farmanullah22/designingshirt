import React from "react";
import "./AboutSection.css"; // Assuming you have a CSS file for styles
import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section className="about-section">

      {/* ---------- Hero Section ---------- */}
      <div className="about-hero">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1>About AF Shirt Design</h1>
          <p>Where Creativity Meets Comfort</p>
        </motion.div>
      </div>

      {/* ---------- Main Container ---------- */}
      <motion.div
        className="about-container"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Intro Text */}
        <motion.p
          className="about-text"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          At <strong>AF Shirt Design</strong>, we believe fashion is more than just clothing—
          it's an expression of personality and creativity. We provide stylish,
          high-quality shirts for every occasion.
        </motion.p>

        {/* Mission & Why Choose Us */}
        <div className="about-grid">
          <motion.div className="about-card" whileHover={{ scale: 1.05 }}>
            <h3>Our Mission</h3>
            <p>
              Redefining casual wear with premium quality, innovative designs,
              and affordability while maintaining an eco-friendly approach.
            </p>
          </motion.div>

          <motion.div className="about-card" whileHover={{ scale: 1.05 }}>
            <h3>Why Choose Us?</h3>
            <ul>
              <li>✅ Premium Quality Fabrics</li>
              <li>✅ Unique & Modern Designs</li>
              <li>✅ Affordable Prices</li>
              <li>✅ Eco-Friendly Production</li>
              <li>✅ Customer Satisfaction Guaranteed</li>
            </ul>
          </motion.div>
        </div>

        {/* Counters */}
        <div className="stats">
          <motion.div whileInView={{ scale: 1.1 }} transition={{ duration: 0.5 }}>
            <h4>10K+</h4>
            <p>Shirts Sold</p>
          </motion.div>
          <motion.div whileInView={{ scale: 1.1 }} transition={{ duration: 0.5 }}>
            <h4>5K+</h4>
            <p>Happy Customers</p>
          </motion.div>
        </div>

        {/* Team */}
        <div className="team-section">
          <h3>Meet Our Team</h3>
          <div className="team-grid">
            <motion.div className="team-member" whileHover={{ scale: 1.05 }}>
              <img src="/public/images/shirt-hero2.jpg" alt="John Doe" />
              <h4>John Doe</h4>
              <p>Lead Designer</p>
            </motion.div>
            <motion.div className="team-member" whileHover={{ scale: 1.05 }}>
              <img src="/public/images/shirt-hero.jpg" alt="Jane Smith" />
              <h4>Jane Smith</h4>
              <p>Creative Director</p>
            </motion.div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="testimonials">
          <h3>What Our Customers Say</h3>
          <motion.div className="testimonial-card" whileHover={{ scale: 1.03 }}>
            <p>"The quality is top-notch. I always get compliments!"</p>
            <span>- Sarah K.</span>
          </motion.div>
          <motion.div className="testimonial-card" whileHover={{ scale: 1.03 }}>
            <p>"Stylish, comfy, and affordable. Highly recommend!"</p>
            <span>- Mike T.</span>
          </motion.div>
        </div>

        {/* Contact Info */}
        <motion.div
          className="contact-section"
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <h3>Get in Touch</h3>
          <p>Email: <a href="mailto:support@afshirtdesign.com">support@afshirtdesign.com</a></p>
          <p>Phone: +123 456 7890</p>
          <p>Website: <a href="#">www.afshirtdesign.com</a></p>
        </motion.div>
      </motion.div>


    </section>
  );
};

export default AboutSection;
