import React from "react";
import { motion } from "framer-motion";
import "../styles/About.css";
import { Helmet } from "react-helmet-async"; // Import Helmet
import { Link } from "react-router-dom";

const About = () => {
  return (
    <>
      {/* Helmet for SEO */}
      <Helmet>
        <title>About Us | Propel Foundry - Startup Mentorship & Training</title>
        <meta
          name="description"
          content="Propel Foundry empowers startups with mentorship, training, and a strong network. Learn about our vision, mission, values, and impact in supporting founders."
        />
        <meta
          name="keywords"
          content="Propel Foundry, startup mentorship, startup training, startup support, startup accelerator, startup growth, entrepreneur network"
        />
      </Helmet>

      <section className="about-hero" id="about">
        <div className="about-hero-inner">
          <motion.h1
            className="about-hero-title"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Building Founders. Accelerating Impact.
          </motion.h1>
          <motion.p
            className="about-hero-subtitle"
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Propel Foundry empowers startups across their journey — from idea to scale — with mentorship, training, and a powerful network.
          </motion.p>
        </div>
      </section>

      <section className="about-section">
        <div className="about-container">
          <div className="about-grid">
            {[
              {
                title: "Our Vision",
                text:
                  "To accelerate founders with the right knowledge, network, and tools to build impactful companies.",
              },
              {
                title: "Mission",
                text:
                  "Registration, compliance, mentorship, training, and investor-ready preparation through curated programs.",
              },
              {
                title: "Our Values",
                text:
                  "Integrity, execution, and founder-first support with measurable outcomes and long-term guidance.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                className="about-card"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.15 * (i + 1) }}
              >
                <h3 className="about-card-title">{item.title}</h3>
                <p className="about-card-text">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="about-stats">
        <div className="about-stats-container">
          {[
            { label: "Startups Supported", value: "120+" },
            { label: "Mentor Network", value: "200+" },
            { label: "Workshops Conducted", value: "80+" },
          ].map((s, idx) => (
            <motion.div
              key={idx}
              className="stat-card"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <div className="stat-value">{s.value}</div>
              <div className="stat-label">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="about-timeline">
        <div className="timeline-inner">
          {[
            { text: "Founded to bridge gaps between academia and industry for founders." },
            { text: "Launched mentor network and flagship training programs." },
            { text: "Scaled to multi-city workshops and startup showcases." },
          ].map((t, idx) => (
            <motion.div
              key={idx}
              className={`timeline-item ${idx % 2 ? "right" : "left"}`}
              initial={{ opacity: 0, x: idx % 2 ? 40 : -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <div className="timeline-dot" />
              <div className="timeline-content">
                <div className="timeline-year">{t.year}</div>
                <div className="timeline-text">{t.text}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="about-cta">
        <motion.div
          className="about-cta-card"
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h1>Ready to partner with us?</h1>
          <p>Join our community, find mentors, and accelerate your journey today.</p>
          <Link to="/contact" className="about-cta-button">Contact Us</Link>
        </motion.div>
      </section>
    </>
  );
};

export default About;
