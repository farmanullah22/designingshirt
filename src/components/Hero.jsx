import React, { useState, useEffect } from "react";
import "./Hero.css"; // Importing CSS for styling

const slides = [
  { id: 1, image: "/images/shirt-hero3.jpg", text: "Elevate Your Style with AF Shirt-Design" },
  { id: 2, image: "/images/shirt-hero2.jpg", text: "Designed for Fashion Lovers, Athletes & Business" },
  { id: 3, image: "/images/shirt-hero.jpg", text: "Premium Quality, Stylish & Customizable" }
];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 2000); // Auto slide every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero">
      <div className="slider">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`slide ${index === currentIndex ? "active" : ""}`}
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="overlay"></div>
            <div className="hero-content">
              <h1 className="hero-title">AF Shirt-Design</h1>
              <p className="hero-description">
                Premium quality shirts tailored to your style. Whether for business, sports, or casual wear – we've got you covered.
              </p>
            </div>
            <h2 className="slide-text">{slide.text}</h2>
          </div>
        ))}
      </div>

      <div className="slider-dots">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentIndex ? "active" : ""}`}
            onClick={() => setCurrentIndex(index)}
          ></span>
        ))}
      </div>
    </section>
  );
};

export default Hero;
