import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import "../styles/Header.css";
import logo from "../assets/img3.png";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="header">
      <div className="header-left">
        <Link to="/home">
          <img src={logo} alt="Propel Foundry Logo" className="header-logo-img" />
        </Link>
      </div>

      <div className="header-right">
        <button
          className="header-menu-btn"
          aria-label="Open menu"
          onClick={() => setOpen((v) => !v)}
        >
          ≡
        </button>

        <nav className={`nav-links ${open ? "open" : ""}`} onClick={() => setOpen(false)}>
          <NavLink to="/home" end className={({ isActive }) => (isActive ? "active" : "")}>Home</NavLink>
          <NavLink to="/services" className={({ isActive }) => (isActive ? "active" : "")}>Services</NavLink>
          <NavLink to="/community" className={({ isActive }) => (isActive ? "active" : "")}>Community</NavLink>
          <NavLink to="/contact" className={({ isActive }) => (isActive ? "active" : "")}>Contact</NavLink>
          <NavLink to="/about" className={({ isActive }) => (isActive ? "active" : "")}>About</NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;
