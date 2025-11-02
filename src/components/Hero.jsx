import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Helmet } from "react-helmet-async";
import "../styles/Hero.css";
import RotatingText from "./RotatingText"; // 🌀 Import the rotating text

import dpiitImg from "../assets/dpiit registration.png";
import gstImg from "../assets/gst registration.png";
import mentoringImg from "../assets/mentoring.png";
import networkingImg from "../assets/networking.png";
import fundingImg from "../assets/startup funding.png";

const images = [dpiitImg, gstImg, mentoringImg, networkingImg, fundingImg];

const Hero = () => {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const navigate = useNavigate();
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  // 🔁 Auto slide
  useEffect(() => {
    if (paused) return;
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [paused]);

  // ⌨️ Keyboard nav
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "ArrowRight") setCurrent((prev) => (prev + 1) % images.length);
      if (e.key === "ArrowLeft") setCurrent((prev) => (prev - 1 + images.length) % images.length);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
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
          content="Propel Foundry empowers startups to launch, scale, and succeed with strategic mentorship, compliance support, and funding guidance."
        />
      </Helmet>

      {/* === Left Content === */}
      <motion.div
        className="hero-content"
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1, ease: "easeOut" }}
      >
      <h1 className="hero-heading">
  Empowering Startups to{" "}
  <RotatingText texts={["Launch", "Grow", "Scale", "Succeed"]} />
</h1>


        <p className="hero-subtext">
          Propel Foundry partners with ambitious founders to transform bold ideas into thriving ventures.  
          From strategy and compliance to funding and mentorship — we’re with you at every step.
        </p>

        <div className="hero-buttons">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="hero-button primary"
            onClick={goToServices}
          >
            Explore Our Services
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="hero-button secondary"
            onClick={goToContact}
          >
            Book an Appointment
          </motion.button>
        </div>
      </motion.div>

      {/* === Right Carousel === */}
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
              initial={{ x: 150, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -150, opacity: 0 }}
              transition={{ duration: 0.9, ease: "easeInOut" }}
              draggable={false}
            />
          )}
        </AnimatePresence>

        <button className="hero-arrow left" onClick={prev} aria-label="Previous">
          &#8592;
        </button>
        <button className="hero-arrow right" onClick={next} aria-label="Next">
          &#8594;
        </button>

        <div className="hero-dots">
          {images.map((_, idx) => (
            <button
              key={idx}
              className={`dot ${idx === current ? "active" : ""}`}
              onClick={() => setCurrent(idx)}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
