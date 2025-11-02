import React from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import "../styles/Training.css";
import growthImage from "../assets/growth.jpg"; // Replace with a higher quality image/vector later

const Training = () => {
  const handleLearnMore = () => {
    window.location.href = "/services"; // redirects to your Services page
  };

  return (
    <section className="training-section" id="training">
      {/* 🧠 SEO Meta Tags */}
      <Helmet>
        <title>Training Sessions | Propel Foundry</title>
        <meta
          name="description"
          content="Join Propel Foundry's professional training sessions for startups. Gain investment readiness, operational skills, and mentorship to scale effectively."
        />
        <meta
          name="keywords"
          content="Propel Foundry training, startup training programs, investment readiness, business growth training, startup mentorship"
        />
      </Helmet>

      {/* 🏷️ Section Title */}
      <h2 className="training-heading">Professional Training Sessions</h2>

      {/* 🧩 Wrapper */}
      <div className="training-wrapper">
        {/* 🖼️ Image Section */}
        <motion.div
          className="training-image-wrapper"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <img
            src={growthImage}
            alt="Business Growth Training"
            className="training-image"
          />
        </motion.div>

        {/* 📝 Content Section */}
        <motion.div
          className="training-content"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="training-subheading">
            Propel Foundry provides specialized training for startups to scale effectively
            and prepare for investment, growth, and operational excellence.
          </p>
          <ul className="training-points">
            <li>Technology readiness programs for new ventures.</li>
            <li>Investment and pitch preparation guidance.</li>
            <li>Employee skill development and leadership training.</li>
            <li>Talent acquisition, retention, and growth strategies.</li>
          </ul>

          <motion.button
            whileHover={{ scale: 1.05 }}
            className="training-button"
            onClick={handleLearnMore}
          >
            Learn More
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Training;
