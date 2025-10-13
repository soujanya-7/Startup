import React, { useState } from "react";
import "../styles/FAQ.css";
import { motion } from "framer-motion";

const faqData = [
  {
    question: "How do I find a mentor?",
    answer:
      "You can explore our mentor directory based on industry, experience, or specific skill sets. Each mentor profile highlights their expertise, past projects, and availability. Once you find a suitable mentor, simply send a connection request. After approval, you can start chatting, scheduling sessions, and collaborating directly from your dashboard."
  },
  {
    question: "How do I book a session?",
    answer:
      "After your mentor connection is accepted, head to the mentor’s profile or your dashboard. You can view available time slots and choose a convenient one. Once confirmed, you’ll receive an email and in-app notification with all session details. The meeting link and session notes will automatically appear in your account for easy access."
  },
  {
    question: "Are session materials available later?",
    answer:
      "Absolutely. Every session’s materials — including shared resources, mentor notes, attachments, and meeting recordings (if applicable) are securely stored in your dashboard. You can revisit them anytime to review discussions, track your startup’s progress, and apply the insights at your own pace."
  },
  {
    question: "Who can sign up as a mentor or startup?",
    answer:
      "Startups at any stage — from idea validation to scaling — are welcome to register. Mentors are typically experienced professionals, founders, or domain experts who can guide startups strategically. Both mentors and startups go through a short verification process to ensure authenticity and meaningful collaborations."
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
        Answers for startups and mentors. Get clear guidance on connecting, booking, and using our platform’s features effectively.
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
