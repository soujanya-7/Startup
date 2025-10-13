import React from "react";
import { motion } from "framer-motion";
import "../styles/Services.css";
import { 
  FaRegLightbulb, 
  FaFileContract, 
  FaUserTie, 
  FaChartLine, 
  FaBriefcase, 
  FaChalkboardTeacher, 
  FaUsers, 
  FaTrophy 
} from "react-icons/fa";

const servicesData = [
  {
    icon: <FaRegLightbulb />,
    title: "Startup Consulting",
    description: "Guidance on idea validation, business model, and market strategy.",
  },
  {
    icon: <FaFileContract />,
    title: "Company Registration",
    description: "Assistance for OPC, LLP, Pvt Ltd, and Section 8 company registration.",
  },
  {
    icon: <FaUserTie />,
    title: "IPR & Compliance",
    description: "Protect your innovations with IPR registration and legal compliance.",
  },
  {
    icon: <FaChartLine />,
    title: "Business Growth",
    description: "Training, proposal writing, and growth strategies for your startup.",
  },
  {
    icon: <FaBriefcase />,
    title: "Mentorship",
    description: "Connect with experienced mentors who guide you through business growth strategies.",
  },
  {
    icon: <FaUsers />,
    title: "Networking & Partnerships",
    description: "Gain access to investors, partners, and networking events tailored for startups.",
  },
  {
    icon: <FaChalkboardTeacher />,
    title: "Training Programs",
    description: "Learn from experts with structured training sessions and workshops.",
  },
  {
    icon: <FaTrophy />,
    title: "Winning Hackathon",
    description: "We help startups showcase solutions and participate in hackathons for real-world impact.",
  },
];

const Services = () => {
  return (
    <section className="services-section" id="services">
      <h2 className="services-heading">Our Services</h2>
      <p className="services-subheading">
        We provide end-to-end support for startups, from registration and mentorship to growth and networking.
      </p>
      <div className="services-grid">
        {servicesData.map((service, index) => (
          <motion.div
            key={index}
            className="service-card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
          >
            <div className="service-icon">{service.icon}</div>
            <h3 className="service-title">{service.title}</h3>
            <p className="service-description">{service.description}</p>
            <button className="service-button">Learn More</button>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Services;
