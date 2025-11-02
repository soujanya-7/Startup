import React, { useState, useEffect } from "react";
import { NavLink, useLocation, Link } from "react-router-dom";
import "../styles/Header.css";
import logo from "../assets/img3.png";

const Header = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const [activeSection, setActiveSection] = useState("home");

  // Update active link on route change
  useEffect(() => {
    const currentPath = location.pathname.replace("/", "");
    setActiveSection(currentPath || "home");
  }, [location]);

  return (
    <header className="header">
      <div className="header-container">
        {/* === Left: Logo === */}
        <div className="header-left">
          <Link to="/home" className="header-logo-link">
            <img
              src={logo}
              alt="Propel Foundry Logo"
              className="header-logo-img"
            />
          </Link>
        </div>

        {/* === Right: Navigation + Menu === */}
        <div className="header-right">
          <button
            className="header-menu-btn"
            aria-label="Toggle menu"
            onClick={() => setOpen((prev) => !prev)}
          >
            ☰
          </button>

          <nav
            className={`nav-links ${open ? "open" : ""}`}
            onClick={() => setOpen(false)}
          >
            <NavLink
              to="/home"
              className={activeSection === "home" ? "active" : ""}
            >
              Home
            </NavLink>
            <NavLink
              to="/services"
              className={activeSection === "services" ? "active" : ""}
            >
              Services
            </NavLink>
            <NavLink
              to="/community"
              className={activeSection === "community" ? "active" : ""}
            >
              Community
            </NavLink>
            <NavLink
              to="/opportunities"
              className={activeSection === "opportunities" ? "active" : ""}
            >
              Opportunities
            </NavLink>
            <NavLink
              to="/contact"
              className={activeSection === "contact" ? "active" : ""}
            >
              Contact
            </NavLink>
            <NavLink
              to="/about"
              className={activeSection === "about" ? "active" : ""}
            >
              About
            </NavLink>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;

