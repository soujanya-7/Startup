import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Helmet } from "react-helmet-async";
import "../styles/Hero.css";

import dpiitImg from "../assets/dpiit registration.png";
import gstImg from "../assets/gst registration.png";
import mentoringImg from "../assets/mentoring.png";
import networkingImg from "../assets/networking.png";
import fundingImg from "../assets/startup funding.png";

const images = [dpiitImg, gstImg, mentoringImg, networkingImg, fundingImg];

const Hero = () => {
  const [current, setCurrent] = useState(0);
  const navigate = useNavigate();
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });
  const [paused, setPaused] = useState(false);

  // ✅ Auto-slide every 5s but pause on hover
  useEffect(() => {
    if (paused) return;
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [paused]);

  // Keyboard navigation
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "ArrowRight") setCurrent((prev) => (prev + 1) % images.length);
      if (e.key === "ArrowLeft") setCurrent((prev) => (prev - 1 + images.length) % images.length);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const next = () => setCurrent((prev) => (prev + 1) % images.length);
  const prev = () => setCurrent((prev) => (prev - 1 + images.length) % images.length);

  const goToServices = () => navigate("/services");
  const goToContact = () => navigate("/contact");

  return (
    <section
      className="hero-section"
      ref={ref}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <Helmet>
        <title>Propel Foundry | Startup Growth Partner</title>
        <meta
          name="description"
          content="Propel Foundry helps startups launch, scale, and succeed with mentorship, training, compliance guidance, and investor networking."
        />
      </Helmet>

      <motion.div
        className="hero-content"
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1 }}
      >
        <h1 className="hero-heading">Your Startup Growth Partner</h1>
        <p className="hero-subtext">
          We help founders launch, scale, and succeed with strategic guidance, expert mentorship, and a powerful network.
        </p>

          {/* ✨ NEW HIGHLIGHT BLOCK
          <div className="hero-highlights">
            <p className="highlight">🚀 End-to-end startup support from idea to funding</p>
            <p className="highlight">💼 Access to investors, mentors & resources</p>
            <p className="highlight">🧠 Personalized business strategy for your vision</p>
          </div> */}

        {/* ✨ Optional small tagline */}
        <p className="hero-tagline">Empowering founders to turn ideas into impact.</p>

       {/* 🎯 Dual Buttons */}
<div className="hero-buttons">
  <motion.button
    whileHover={{ scale: 1.05 }}
    className="hero-button primary"
    onClick={goToServices}
  >
    Explore Our Services
  </motion.button>
  <motion.button
    whileHover={{ scale: 1.05 }}
    className="hero-button secondary"
    onClick={goToContact}
  >
    Book an Appointment
  </motion.button>
</div>
      </motion.div>

      {/* ✅ Image carousel */}
      <div
        className="hero-image-slider"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <AnimatePresence mode="wait">
          {inView && (
            <motion.img
              key={images[current]}
              src={images[current]}
              alt="Startup visual"
              className="hero-image"
              initial={{ x: 300, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -300, opacity: 0 }}
              transition={{ duration: 1 }}
            />
          )}
        </AnimatePresence>

        <button className="hero-arrow left" onClick={prev}>&#8592;</button>
        <button className="hero-arrow right" onClick={next}>&#8594;</button>

        <div className="hero-dots">
          {images.map((_, idx) => (
            <button
              key={idx}
              className={`dot ${idx === current ? "active" : ""}`}
              onClick={() => setCurrent(idx)}
            >
              <span className="progress" />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
