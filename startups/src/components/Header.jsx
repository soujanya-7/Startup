import React from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/Header.css";

const Header = () => {
  const { pathname } = useLocation();
  const isAuthRoute = pathname === "/signin" || pathname === "/signup";

  const handleLogoClick = (e) => {
    if (pathname === "/") {
      e.preventDefault();
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }
  };

  return (
    <header className="header">
      <div className="header-logo"><Link to="/" onClick={handleLogoClick}>Propel Foundry</Link></div>

      <div className="header-right">
        {!isAuthRoute && (
          <nav className="nav-links">
            <a href="#services">Services</a>
            <a href="#registration">Registration</a>
            <a href="#cta">Get Started</a>
          </nav>
        )}

        <div className="header-auth">
          <Link className="header-link" to="/signin">Sign In</Link>
          <Link className="header-button" to="/signup">Sign Up</Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
