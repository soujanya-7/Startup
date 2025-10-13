import React from "react";
import { motion } from "framer-motion";
import "../styles/Training.css";
import growthImage from "../assets/growth.jpg"; 

const Training = () => {
  return (
    <section className="training-section" id="training">
      <h2 className="training-heading">Professional Training Sessions</h2>
      <div className="training-wrapper">
        <motion.div
          className="training-image-wrapper"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <img src={growthImage} alt="Business Growth" className="training-image" />
        </motion.div>

        <motion.div
          className="training-content"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="training-subheading">
            Propel Foundry provides specialized training for startups to scale effectively and
            prepare for investment, growth, and operational excellence.
          </p>
          <ul className="training-points">
            <li>Technology readiness programs for new ventures.</li>
            <li>Investment and pitch preparation guidance.</li>
            <li>Employee skill development and leadership training.</li>
            <li>Talent acquisition, retention, and growth strategies.</li>
          </ul>
          <motion.button
            whileHover={{ scale: 1.05, backgroundColor: "#0a47ff", color: "#fff" }}
            className="training-button"
          >
            Learn More
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Training;
