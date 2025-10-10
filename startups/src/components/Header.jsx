import React from "react";
import "../styles/Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="header-logo">Propel Foundry</div>

      <nav className="nav-links">
        <a href="#services">Services</a>
        <a href="#registration">Registration</a>
        <a href="#cta">Get Started</a>
      </nav>

      <button className="header-button">Contact Us</button>
    </header>
  );
};

export default Header;
