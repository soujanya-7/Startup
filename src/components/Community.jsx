import React from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import "../styles/Community.css";
import startupImg from "../assets/image.png";
import mentorImg from "../assets/mentorship.jpg";
import studentImg from "../assets/growth.jpg";
import facultyImg from "../assets/network.jpg";

const communityData = [
  {
    title: "Startup Community",
    description: "Join a vibrant community of startups, share ideas, get mentorship, and collaborate on innovative projects.",
    image: startupImg,
  },
  {
    title: "Mentor Community",
    description: "Connect with experienced mentors who provide guidance, insights, and support to help you grow your startup.",
    image: mentorImg,
  },
  {
    title: "Student Community",
    description: "A platform for students to engage with startups, learn industry skills, participate in events, and gain real-world exposure.",
    image: studentImg,
  },
  {
    title: "Research Faculty Community",
    description: "Collaborate with research faculty to explore innovative solutions, join projects, and bridge academia with industry.",
    image: facultyImg,
  },
];

const Community = () => {
  return (
    <section className="community-section" id="community">
      {/* SEO Meta Tags */}
      <Helmet>
        <title>Community | Propel Foundry</title>
        <meta
          name="description"
          content="Join Propel Foundry's vibrant community for startups, mentors, students, and faculty. Collaborate, learn, and grow with our network."
        />
        <meta
          name="keywords"
          content="Propel Foundry community, startup community, mentor network, student startup program, research faculty collaboration"
        />
      </Helmet>

      <h2 className="community-heading">Explore Our Community</h2>
      <div className="community-wrapper">
        {communityData.map((item, index) => (
          <motion.div
            key={index}
            className={`community-item ${index % 2 !== 0 ? "reverse" : ""}`}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: index * 0.3 }}
          >
            <div className="community-image-wrapper">
              <img src={item.image} alt={item.title} className="community-image" />
            </div>
            <div className="community-content">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <motion.button
                whileHover={{ scale: 1.05, backgroundColor: "#0a47ff", color: "#fff" }}
                className="community-button"
              >
                Join Now
              </motion.button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Community;
