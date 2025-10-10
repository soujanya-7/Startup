import React from "react";
import { motion } from "framer-motion";
import "../styles/Training.css";
import growthImage from "../assets/growth.jpg"; // Replace with your image

const Training = () => {
  return (
    <section className="training-section" id="training">
      <div className="training-row">
        <motion.div
          className="training-text"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="training-heading">Business Growth & Training</h2>
          <p className="training-description">
            Propel Foundry offers specialized training sessions for startups on
            technology readiness, investment readiness, and business growth strategies.
            Enhance employee skills and develop leadership, talent acquisition, and retention strategies.
          </p>
          <button className="training-button">Learn More</button>
        </motion.div>

        <motion.img
          src={growthImage}
          alt="Business Growth"
          className="training-image"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        />
      </div>
    </section>
  );
};

export default Training;
