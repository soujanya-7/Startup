import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Opportunities.css";

const Opportunities = () => {
  const [activeTab, setActiveTab] = useState("funding");
  const navigate = useNavigate();

  const opportunitiesData = {
    funding: [
      {
        id: 1,
        title: "SeedSpark 2025",
        image: "https://i.ibb.co/zRd4C4f/startupfunding.jpg",
        organisedBy: "Propel Foundry Labs",
        deadline: "November 30, 2025",
        description:
          "Get your startup off the ground with SeedSpark’s seed funding round. Open for early-stage tech and innovation-driven startups.",
      },
      {
        id: 2,
        title: "Blue Ocean VC Challenge",
        image: "https://i.ibb.co/2h2zvH3/venturefund.jpg",
        organisedBy: "Blue Ocean Ventures",
        deadline: "December 10, 2025",
        description:
          "Pitch your scalable business idea to global investors. Gain mentorship, exposure, and funding up to $250,000 for your next big idea.",
      },
      {
        id: 3,
        title: "Ignite Founders Grant",
        image: "https://i.ibb.co/8rZ1JbM/ignitegrant.jpg",
        organisedBy: "Ignite India Foundation",
        deadline: "January 5, 2026",
        description:
          "Aimed at supporting women-led startups and social entrepreneurs. Offers grants of up to ₹15 lakhs and business mentorship sessions.",
      },
      {
        id: 4,
        title: "TechElevate Innovation Drive",
        image: "https://i.ibb.co/MpJdB2h/innovationdrive.jpg",
        organisedBy: "Propel Foundry Innovation Cell",
        deadline: "December 22, 2025",
        description:
          "For tech startups building AI or IoT-based solutions. Winners receive seed capital and access to incubation facilities.",
      },
    ],
    hackathon: [
      {
        id: 5,
        title: "InnovateX Global Hack 2025",
        image: "https://i.ibb.co/YWbyHrN/hackathon.jpg",
        organisedBy: "TechVerse",
        deadline: "November 20, 2025",
        description:
          "A 48-hour coding challenge for developers and designers to build AI-powered sustainable solutions. Win prizes worth $10,000!",
      },
      {
        id: 6,
        title: "SmartCity Challenge",
        image: "https://i.ibb.co/6BD8SLv/smartcityhack.jpg",
        organisedBy: "TechNext Coimbatore",
        deadline: "December 8, 2025",
        description:
          "Join developers worldwide to create smart urban innovations. Theme: Smart Mobility and Energy.",
      },
      {
        id: 7,
        title: "CodeSprint 2.0",
        image: "https://i.ibb.co/W6GhYqH/codesprint.jpg",
        organisedBy: "National Coding Network",
        deadline: "January 15, 2026",
        description:
          "National-level hackathon for students to showcase coding, design, and AI creativity. Cash prizes up to ₹2 lakhs and internship offers.",
      },
      {
        id: 8,
        title: "EcoTech HackFest",
        image: "https://i.ibb.co/FJsS8R4/ecohack.jpg",
        organisedBy: "Green Tech Association",
        deadline: "February 1, 2026",
        description:
          "Focuses on environmental sustainability through technology. Develop smart waste management and green energy solutions.",
      },
    ],
    research: [
      {
        id: 9,
        title: "AI Research Fellowship 2025",
        image: "https://i.ibb.co/vVNNjG6/researchposter.jpg",
        organisedBy: "AI Research Council",
        deadline: "November 25, 2025",
        description:
          "Collaborate with top universities on machine learning and computer vision projects. Fully funded 6-month fellowship with research grants.",
      },
      {
        id: 10,
        title: "GreenTech Paper Submission",
        image: "https://i.ibb.co/fCNCKkx/researchconf.jpg",
        organisedBy: "International GreenTech Conference",
        deadline: "December 18, 2025",
        description:
          "Submit your paper on sustainable energy innovations to the International Conference on GreenTech, 2025 edition.",
      },
      {
        id: 11,
        title: "NextGen Innovation Symposium",
        image: "https://i.ibb.co/T4G8qQ9/researchsymp.jpg",
        organisedBy: "NextGen Research Hub",
        deadline: "January 30, 2026",
        description:
          "A platform for young researchers to present their findings in robotics, healthcare AI, and IoT technologies.",
      },
      {
        id: 12,
        title: "QuantumTech Scholars Program",
        image: "https://i.ibb.co/4YK3WjZ/quantumresearch.jpg",
        organisedBy: "QuantumTech Labs",
        deadline: "February 15, 2026",
        description:
          "Research program dedicated to quantum computing and cryptography. Offers stipend, lab resources, and publication support.",
      },
    ],
  };

  return (
    <section className="opportunities-section">
      <h1 className="opp-title">Explore Opportunities</h1>

      <div className="opp-tabs">
        {["funding", "research", "hackathon"].map((tab) => (
          <button
            key={tab}
            className={activeTab === tab ? "tab active" : "tab"}
            onClick={() => setActiveTab(tab)}
          >
            {tab === "funding"
              ? "Startup Funding"
              : tab === "research"
              ? "Research"
              : "Hackathons"}
          </button>
        ))}
      </div>

      <div className="opp-content">
        {opportunitiesData[activeTab].map((item) => (
          <div key={item.id} className="opp-card">
            <img src={item.image} alt={item.title} className="opp-image" />
            <div className="opp-text">
              <h3>{item.title}</h3>
              <p>{item.description.substring(0, 70)}...</p>
              <button
                className="know-more-btn"
                onClick={() => navigate(`/event/${item.id}`)}
              >
                Know More
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Opportunities;
