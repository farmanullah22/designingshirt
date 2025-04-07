import React from "react";
import "./Home_Shirt.css"; // Assuming you have a CSS file for styling

const About = () => {
  return (
    <section className="Home_About">
      <div className="Home_AboutContainer">
        
        {/* Text Content */}
        <div className="Home_AboutText">
          <h2 className="Home_AboutHeading">About AF Shirt-Design</h2>
          <p className="Home_AboutParagraph">
            At <strong className="Home_AFtext">AF Shirt-Design</strong>, we create premium, stylish, and fully customizable shirts 
            tailored to your needs. Whether you're a fashion lover, an athlete, or a business professional, 
            our high-quality fabrics and unique designs will make you stand out.
          </p>
          <p className="Home_AboutParagraph">
            Our goal is to provide comfort and elegance while ensuring that every customer gets 
            the perfect design they envision. Elevate your wardrobe with AF Shirt-Design today!
          </p>
          <a href="/order" className="Home_AboutButton">Shop Now</a>
        </div>

        {/* Image Section */}
        <div className="Home_AboutImageWrapper">
          <img src="/public/images/shirt-hero3.jpg" alt="AF Shirt Design" className="Home_AboutImage" />
        </div>

      </div>
    </section>
  );
};

export default About;
