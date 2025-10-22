import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Helmet } from "react-helmet"; // ✅ import Helmet
import "../styles/Hero.css";
import dpiitImg from "../assets/dpiit registration.png";
import gstImg from "../assets/gst registration.png";
import mentoringImg from "../assets/mentoring.png";
import networkingImg from "../assets/networking.png";
import fundingImg from "../assets/startup funding.png";

const images = [dpiitImg, gstImg, mentoringImg, networkingImg, fundingImg];

const Hero = () => {
  const [current, setCurrent] = useState(0);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Keyboard arrow navigation
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

  const goToServices = () => {
    window.location.hash = "#/services";
  };

  return (
    <section className="hero-section" ref={ref}>
      {/* ✅ SEO for Hero section */}
      <Helmet>
        <title>Propel Foundry | Startup Growth Partner</title>
        <meta
          name="description"
          content="Propel Foundry helps startups launch, scale, and succeed with mentorship, training, compliance guidance, and investor networking."
        />
        <meta
          name="keywords"
          content="startup growth, mentorship, training programs, business registration, networking, startup funding, IPR compliance"
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

        <motion.button
          whileHover={{ scale: 1.05 }}
          className="hero-button"
          onClick={goToServices}
        >
          Explore Our Services
        </motion.button>
      </motion.div>

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

        <button className="hero-arrow left" onClick={prev} aria-label="Previous">
          &#8592;
        </button>
        <button className="hero-arrow right" onClick={next} aria-label="Next">
          &#8594;
        </button>

        <div className="hero-dots" role="tablist" aria-label="Slideshow Dots">
          {images.map((_, idx) => (
            <button
              key={idx}
              className={`dot ${idx === current ? "active" : ""}`}
              aria-label={`Go to slide ${idx + 1}`}
              aria-selected={idx === current}
              type="button"
              onClick={() => setCurrent(idx)}
            >
              <span className="progress" aria-hidden="true" />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
