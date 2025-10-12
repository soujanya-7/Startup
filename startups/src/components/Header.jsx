import React, { useState } from "react";
import "../styles/Header.css";
import logo from "../assets/img3.png"; 

const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <header className="header">
      {/* LEFT SECTION — Logo + Brand Name */}
      <div className="header-left">
        <img src={logo} alt="Propel Foundry Logo" className="header-logo-img" />
        
      </div>

      {/* RIGHT SECTION — Navigation + Button */}
      <div className="header-right">
        <button className="header-menu-btn" aria-label="Open menu" onClick={() => setOpen((v) => !v)}>
          ⋮
        </button>
        <nav className={`nav-links ${open ? "open" : ""}`} onClick={() => setOpen(false)}>
          <a href="#/">Home</a>
          <a href="#/services">Services</a>
          <a href="#/community">Community</a>
          <a href="#/contact">Contact</a>
          <a href="#/about">About</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
