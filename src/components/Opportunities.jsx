import React, { useState } from "react";
import "../styles/Opportunities.css";

const Opportunities = () => {
  const [activeTab, setActiveTab] = useState("funding");

  const opportunitiesData = {
    funding: [
      {
        title: "SeedSpark 2025",
        image: "https://i.ibb.co/zRd4C4f/startupfunding.jpg",
        description:
          "Get your startup off the ground with SeedSpark’s seed funding round. Open for early-stage tech and innovation-driven startups. Deadline: Nov 30, 2025.",
      },
      {
        title: "Blue Ocean VC Challenge",
        image: "https://i.ibb.co/2h2zvH3/venturefund.jpg",
        description:
          "Pitch your scalable business idea to global investors. Gain mentorship, exposure, and funding up to $250,000.",
      },
      {
        title: "Ignite Founders Grant",
        image: "https://i.ibb.co/8rZ1JbM/ignitegrant.jpg",
        description:
          "Aimed at supporting women-led startups and social entrepreneurs. Offers grants of up to ₹15 lakhs and business mentorship sessions.",
      },
      {
        title: "TechElevate Innovation Drive",
        image: "https://i.ibb.co/MpJdB2h/innovationdrive.jpg",
        description:
          "For tech startups building AI or IoT-based solutions. Winners receive seed capital and access to incubation facilities at PropelFoundry Labs.",
      },
    ],

    hackathon: [
      {
        title: "InnovateX Global Hack 2025",
        image: "https://i.ibb.co/YWbyHrN/hackathon.jpg",
        description:
          "A 48-hour coding challenge for developers and designers to build AI-powered sustainable solutions. Win prizes worth $10,000!",
      },
      {
        title: "SmartCity Challenge",
        image: "https://i.ibb.co/6BD8SLv/smartcityhack.jpg",
        description:
          "Join developers worldwide to create smart urban innovations. Hosted by TechNext Coimbatore. Theme: Smart Mobility and Energy.",
      },
      {
        title: "CodeSprint 2.0",
        image: "https://i.ibb.co/W6GhYqH/codesprint.jpg",
        description:
          "National-level hackathon for students to showcase coding, design, and AI creativity. Cash prizes up to ₹2 lakhs and internship offers.",
      },
      {
        title: "EcoTech HackFest",
        image: "https://i.ibb.co/FJsS8R4/ecohack.jpg",
        description:
          "Focuses on environmental sustainability through technology. Participants will develop smart waste management and green energy solutions.",
      },
    ],

    research: [
      {
        title: "AI Research Fellowship 2025",
        image: "https://i.ibb.co/vVNNjG6/researchposter.jpg",
        description:
          "Collaborate with top universities on machine learning and computer vision projects. Fully funded 6-month fellowship.",
      },
      {
        title: "GreenTech Paper Submission",
        image: "https://i.ibb.co/fCNCKkx/researchconf.jpg",
        description:
          "Submit your paper on sustainable energy innovations to the International Conference on GreenTech, 2025 edition.",
      },
      {
        title: "NextGen Innovation Symposium",
        image: "https://i.ibb.co/T4G8qQ9/researchsymp.jpg",
        description:
          "A platform for young researchers to present their findings in robotics, healthcare AI, and IoT technologies.",
      },
      {
        title: "QuantumTech Scholars Program",
        image: "https://i.ibb.co/4YK3WjZ/quantumresearch.jpg",
        description:
          "Research program dedicated to quantum computing and cryptography. Offers stipend, lab resources, and publication support.",
      },
    ],
  };

  return (
    <section className="opportunities-section">
      <h1 className="opp-title">Explore Opportunities</h1>

      <div className="opp-tabs">
        <button
          className={activeTab === "funding" ? "tab active" : "tab"}
          onClick={() => setActiveTab("funding")}
        >
          Startup Funding
        </button>
        <button
          className={activeTab === "hackathon" ? "tab active" : "tab"}
          onClick={() => setActiveTab("hackathon")}
        >
          Hackathon
        </button>
        <button
          className={activeTab === "research" ? "tab active" : "tab"}
          onClick={() => setActiveTab("research")}
        >
          Research
        </button>
      </div>

      <div className="opp-content">
        {opportunitiesData[activeTab].map((item, index) => (
          <div key={index} className="opp-card">
            <img src={item.image} alt={item.title} className="opp-image" />
            <div className="opp-text">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Opportunities;
