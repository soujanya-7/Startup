import React from "react";
import { motion } from "framer-motion";
import "../styles/Registration.css";

const stepsData = [
  { number: 1, title: "Name Reservation", description: "Reserve your company name via MCA RUN." },
  { number: 2, title: "Digital Signature", description: "Obtain DSC for directors & signatories." },
  { number: 3, title: "Director ID", description: "Get DIN for directors through SPICe+." },
  { number: 4, title: "Incorporation Docs", description: "Prepare MoA, AoA & required documents." },
  { number: 5, title: "File SPICe+", description: "Submit Part A & Part B for incorporation." },
  { number: 6, title: "Certificate", description: "Receive CIN & Certificate after approval." },
];

const Registration = () => {
  return (
    <section className="registration-section" id="registration">
      <h2 className="registration-heading">How It Works</h2>
      <div className="registration-stepper">
        {stepsData.map((step, index) => (
          <React.Fragment key={index}>
            <motion.div
              className={`registration-step-card ${index % 2 === 0 ? 'step-up' : 'step-down'}`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="registration-step-number">{step.number}</div>
              <h3 className="registration-step-title">{step.title}</h3>
              <p className="registration-step-description">{step.description}</p>
            </motion.div>
            {index < stepsData.length - 1 && <div className="registration-connector"></div>}
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};

export default Registration;
