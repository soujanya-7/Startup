import React, { useState, useEffect } from "react";
import "../styles/Header.css";
import logo from "../assets/img3.png";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // Update active section on scroll
  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  // Update active section based on URL hash on page load or refresh
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace("#/", "");
      if (hash) setActiveSection(hash);
    };

    // Run on first load
    handleHashChange();

    // Listen for future hash changes (clicking links)
    window.addEventListener("hashchange", handleHashChange);

    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  return (
    <header className="header">
      <div className="header-left">
        <img src={logo} alt="Propel Foundry Logo" className="header-logo-img" />
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
          <a href="#/home" className={activeSection === "home" ? "active" : ""}>Home</a>
          <a href="#/services" className={activeSection === "services" ? "active" : ""}>Services</a>
          <a href="#/community" className={activeSection === "community" ? "active" : ""}>Community</a>
          <a href="#/opportunities" className={activeSection === "opportunities" ? "active" : ""}>Opportunities</a>
          <a href="#/contact" className={activeSection === "contact" ? "active" : ""}>Contact</a>
          <a href="#/about" className={activeSection === "about" ? "active" : ""}>About</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
