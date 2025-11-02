import React, { useState, useEffect } from "react";
import { NavLink, useLocation, Link } from "react-router-dom";
import "../styles/Header.css";
import logo from "../assets/img3.png";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setOpen((prev) => !prev);

  return (
    <header className={`header ${scrolled ? "scrolled" : ""}`}>
      <div className="header-container">
        {/* === Logo === */}
        <Link to="/home" className="header-logo-link">
          <img src={logo} alt="Propel Foundry Logo" className="header-logo-img" />
        </Link>

        {/* === Hamburger === */}
        <div className={`hamburger ${open ? "active" : ""}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* === Navigation === */}
        <nav className={`header-nav ${open ? "active" : ""}`}>
          <ul>
            {["home", "services", "community", "opportunities", "contact", "about"].map((item) => (
              <li key={item}>
                <NavLink
                  to={`/${item}`}
                  className={({ isActive }) => (isActive ? "active" : "")}
                  onClick={() => setOpen(false)}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;