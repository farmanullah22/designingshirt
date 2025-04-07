import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import "./Navbar.css"; // Import the separate CSS file

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <NavLink to="/" className="navbar-logo">
          <span className="logo-heading"> <img src="/images/logo.png" alt="logo" /> </span> <span className="logo-text">AF </span> Shirt <span className="logo-text2">-</span>Design
        </NavLink>

        {/* Mobile Menu Button */}
        <button className="menu-icon" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FiX /> : <FiMenu />}
        </button>

        {/* Desktop Menu */}
        <ul className="nav-links">
          <li>
            <NavLink to="/" activeClassName="active">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about" activeClassName="active">About</NavLink>
          </li>
          <li>
            <NavLink to="/order" activeClassName="active">Order</NavLink>
          </li>
          <li>
            <NavLink to="/contact" activeClassName="active">Contact</NavLink>
          </li>
        </ul>
      </div>

      {/* Mobile Sidebar */}
      <div className={`sidebar ${isOpen ? "open" : ""}`}>
        <ul className="sidebar-links">
          <li onClick={() => setIsOpen(false)}>
            <NavLink to="/">Home</NavLink>
          </li>
          <li onClick={() => setIsOpen(false)}>
            <NavLink to="/about">About</NavLink>
          </li>
          <li onClick={() => setIsOpen(false)}>
            <NavLink to="/order">Order</NavLink>
          </li>
          <li onClick={() => setIsOpen(false)}>
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
