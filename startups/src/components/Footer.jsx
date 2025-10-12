import React from "react";
import "../styles/Footer.css";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
     
      <div className="footer-column">
        <h4>PropelFoundry</h4>
        <div className="footer-social">
          <a href="#"><FaFacebookF /></a>
          <a href="#"><FaInstagram /></a>
          <a href="#"><FaTwitter /></a>
          <a href="#"><FaLinkedinIn /></a>
          <a href="#"><FaYoutube /></a>
        </div>
      </div>

      
      <div className="footer-column">
        <h4>Platform</h4>
        <ul>
          <li>Home</li>
          <li>Tools</li>
          <li>Plans</li>
          <li>Help</li>
          <li>Connect</li>
        </ul>
      </div>

      
      <div className="footer-column">
        <h4>Resources</h4>
        <ul>
          <li>Blog</li>
          <li>Guides</li>
          <li>Events</li>
          <li>FAQs</li>
          <li>Support</li>
        </ul>
      </div>

      {/* Legal */}
      <div className="footer-column">
        <h4>Legal</h4>
        <ul>
          <li>Privacy</li>
          <li>Terms</li>
          <li>Cookies</li>
          <li>Access Policy</li>
        </ul>
      </div>

      <div className="footer-bottom">
        &copy; {new Date().getFullYear()} Propel Foundry. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
