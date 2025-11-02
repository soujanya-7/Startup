import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/CommunitySection.css";

const CommunitySection = () => {
  const navigate = useNavigate();

  return (
    <section className="community-section">
      <div className="community-content">
        <h2 className="community-heading">Join Our Thriving Tech Community</h2>
        <p className="community-description">
          Connect with like-minded innovators, share knowledge, and grow together.  
          Be part of an ever-evolving ecosystem of learners and leaders shaping the future of technology.
        </p>
        <button
          className="community-button"
          onClick={() => navigate("/community")}
        >
          Learn More
        </button>
      </div>

      <div className="community-visuals">
        <div className="bubble b1"></div>
        <div className="bubble b2"></div>
        <div className="bubble b3"></div>
      </div>
    </section>
  );
};

export default CommunitySection;
