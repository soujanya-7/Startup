import React, { useState } from "react";
import "../styles/FAQ.css";
import { motion } from "framer-motion";

const faqData = [
  {
    question: "How can I connect with the right mentor for my startup?",
    answer:
      "Browse our mentor directory and filter by expertise, industry, or experience. Review profiles to see their background and past projects. Once you find a suitable mentor, send a connection request and start collaborating after approval."
  },
  {
    question: "What’s the process for scheduling a mentoring session?",
    answer:
      "After connecting with a mentor, go to their profile or your dashboard to view available slots. Choose a convenient time, confirm the session, and receive notifications with the meeting link and session details."
  },
  
  {
    question: "Who is eligible to join as a startup or mentor?",
    answer:
      "Startups at any stage—from idea validation to scaling—can register. Mentors are experienced professionals, founders, or domain experts. Both go through a short verification process to ensure meaningful and authentic collaboration."
  },
  {
    question: "Can I switch mentors if needed?",
    answer:
      "Absolutely. If you feel another mentor is a better fit for your startup goals, you can connect with a different mentor while maintaining access to past session records and guidance."
  },
  {
    question: "Are there any costs involved for startups or mentors?",
    answer:
      "Basic registration and access to mentor profiles are free. Some advanced services, workshops, or exclusive sessions may have associated fees, which will be clearly communicated upfront."
  },
  {
    question: "How do I track my mentoring progress?",
    answer:
      "Your dashboard keeps a record of all sessions, notes, shared resources, and completed milestones. You can monitor your startup’s growth and upcoming sessions in one place."
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq-section" id="faq">
      <motion.h2
        className="faq-heading"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        FAQ & Support
      </motion.h2>

      <motion.p
        className="faq-subtext"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Get answers to common questions about mentoring, booking sessions, and using our platform efficiently.
      </motion.p>

      {faqData.map((item, index) => (
        <motion.div
          key={index}
          className="faq-item"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <div className="faq-question" onClick={() => toggleAnswer(index)}>
            {item.question}
            <span>{openIndex === index ? "−" : "+"}</span>
          </div>

          <motion.div
            className={`faq-answer ${openIndex === index ? "open" : ""}`}
            initial={{ height: 0, opacity: 0 }}
            animate={{
              height: openIndex === index ? "auto" : 0,
              opacity: openIndex === index ? 1 : 0
            }}
            transition={{ duration: 0.4 }}
          >
            <p>{item.answer}</p>
          </motion.div>
        </motion.div>
      ))}
    </section>
  );
};

export default FAQ;
