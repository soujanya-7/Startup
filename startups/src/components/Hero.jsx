import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "../styles/Hero.css";

import startupTeam from "../assets/startup-team.jpg";
import mentorship from "../assets/mentorship.jpg";
import businessGrowth from "../assets/business-growth.jpg";
import networkingEvent from "../assets/networking-event.jpg";

const images = [startupTeam, mentorship, businessGrowth, networkingEvent];

const Hero = () => {
  const [current, setCurrent] = useState(0);
  const { ref, inView } = useInView({
    triggerOnce: true, // animate only once
    threshold: 0.3,    // 30% of section visible
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

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
          Your Startup Consulting & Enabler
        </h1>
        <p className="hero-subtext">
          We help startups register, grow, and succeed with expert guidance.
        </p>
        <motion.button 
          whileHover={{ scale: 1.05 }} 
          className="hero-button"
        >
          Get Started
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
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 1 }}
            />
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Hero;
