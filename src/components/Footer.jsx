import React from "react";
import { Helmet } from "react-helmet";
import "../styles/Footer.css";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      {/* SEO / Meta */}
      <Helmet>
        <title>Propel Foundry | Connect & Explore</title>
        <meta
          name="description"
          content="Propel Foundry: Connect with startups, mentors, and resources. Explore our platform, guides, events, and support for growth and innovation."
        />
        <meta
          name="keywords"
          content="Propel Foundry, startup support, mentorship, resources, blog, guides, events, help, connect"
        />
      </Helmet>

      <div className="footer-column">
        <h4>Propel Foundry</h4>
        <div className="footer-social">
          <a
            href="https://www.facebook.com/propelfoundry"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://www.instagram.com/propelfoundry"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>
          <a
            href="https://twitter.com/propelfoundry"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
          >
            <FaTwitter />
          </a>
          <a
            href="https://www.linkedin.com/company/propelfoundry"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedinIn />
          </a>
          <a
            href="https://www.youtube.com/@propelfoundry"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube"
          >
            <FaYoutube />
          </a>
        </div>
      </div>

      <div className="footer-column">
        <h4>Platform</h4>
        <ul>
          <li><a href="#hero">Home</a></li>
          <li><a href="#tools">Tools</a></li>
          <li><a href="#plans">Plans</a></li>
          <li><a href="#faq">Help</a></li>
          <li><a href="#contact">Connect</a></li>
        </ul>
      </div>

      <div className="footer-column">
        <h4>Resources</h4>
        <ul>
          <li><a href="#blog">Blog</a></li>
          <li><a href="#guides">Guides</a></li>
          <li><a href="#events">Events</a></li>
          <li><a href="#faq">FAQs</a></li>
          <li><a href="#support">Support</a></li>
        </ul>
      </div>

      <div className="footer-column">
        <h4>Legal</h4>
        <ul>
          <li><a href="#privacy">Privacy</a></li>
          <li><a href="#terms">Terms</a></li>
          <li><a href="#cookies">Cookies</a></li>
          <li><a href="#access-policy">Access Policy</a></li>
        </ul>
      </div>

      <div className="footer-bottom">
        &copy; {new Date().getFullYear()} Propel Foundry. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
