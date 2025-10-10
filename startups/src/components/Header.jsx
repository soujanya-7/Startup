import React from "react";
import "../styles/Header.css";
import logo from "../assets/img3.png"; 

const Header = () => {
  return (
    <header className="header">
      {/* LEFT SECTION — Logo + Brand Name */}
      <div className="header-left">
        <img src={logo} alt="Propel Foundry Logo" className="header-logo-img" />
        
      </div>

      {/* RIGHT SECTION — Navigation + Button */}
      <div className="header-right">
        <nav className="nav-links">
          <a href="#home">Home</a>
          <a href="#services">Services</a>
          <a href="#solution">Our Solution</a>
          <a href="#
          ">Training</a>
          <a href="#contact">Contact</a>
        </nav>
        <button className="header-button">Join Us</button>
      </div>
    </header>
  );
};

export default Header;
