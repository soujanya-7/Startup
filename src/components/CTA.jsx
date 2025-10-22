import React from "react";
import { Helmet } from "react-helmet";
import "../styles/CTA.css";

const CTA = () => {
  return (
    <section className="cta-section" id="cta">
      {/* SEO / Meta */}
      <Helmet>
        <title>Propel Foundry | Book a Consultation</title>
        <meta
          name="description"
          content="Ready to propel your startup? Book a consultation with Propel Foundry to get expert guidance, mentorship, and growth strategies for your venture."
        />
        <meta
          name="keywords"
          content="Propel Foundry, startup consultation, mentorship, business growth, startup support"
        />
      </Helmet>

      <h2 className="cta-heading">Ready to Propel Your Startup?</h2>
      <p className="cta-subtext">
        Let’s get started today!
      </p>
      <button
        className="cta-button"
        onClick={() => window.location.hash = "#contact"}
        aria-label="Book a consultation with Propel Foundry"
      >
        Book a Consultation
      </button>
    </section>
  );
};

export default CTA;
