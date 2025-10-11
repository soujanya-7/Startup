import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "../styles/Hero.css";

import dpiitImg from "../assets/dpiit registration.png";
import gstImg from "../assets/gst registration.png";
import mentoringImg from "../assets/mentoring.png";
import networkingImg from "../assets/networking.png";
import fundingImg from "../assets/startup funding.png";

const images = [dpiitImg, gstImg, mentoringImg, networkingImg, fundingImg];

const Hero = () => {
  const [current, setCurrent] = useState(0);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "ArrowRight") {
        setCurrent((prev) => (prev + 1) % images.length);
      } else if (e.key === "ArrowLeft") {
        setCurrent((prev) => (prev - 1 + images.length) % images.length);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const next = () => setCurrent((prev) => (prev + 1) % images.length);
  const prev = () => setCurrent((prev) => (prev - 1 + images.length) % images.length);

  return (
    <section className="hero-section" ref={ref}>

      {/* Left Text Content */}
      <motion.div
        className="hero-content"
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1 }}
      >
        <h1 className="hero-heading">
          Your Startup Growth Partner
        </h1>
        <p className="hero-subtext">
          We help founders launch, scale, and succeed with strategic guidance, expert mentorship, and a powerful network.
        </p>

        <motion.button 
          whileHover={{ scale: 1.05 }} 
          className="hero-button"
        >
          Explore Our Services
        </motion.button>
      </motion.div>

      {/* Right Image Slideshow */}
      <div className="hero-image-slider">
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

        {/* Controls */}
        <button className="hero-arrow left" aria-label="Previous" onClick={prev}>
          &#8592;
        </button>
        <button className="hero-arrow right" aria-label="Next" onClick={next}>
          &#8594;
        </button>

        <div className="hero-dots" role="tablist" aria-label="Slideshow Dots">
          {images.map((_, idx) => (
            <button
              key={idx}
              className={`dot ${idx === current ? "active" : ""}`}
              aria-label={`Go to slide ${idx + 1}`}
              aria-selected={idx === current}
              onClick={() => setCurrent(idx)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
