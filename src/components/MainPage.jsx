import React from "react";
import { Helmet } from "react-helmet-async";
import Hero from "./Hero";
import Community from "./Community";
import Training from "./Training";
import FAQ from "./FAQ";
import CTA from "./CTA";
import Footer from "./Footer";
import Contact from "./Contact";

const MainPage = () => {
  return (
    <>
      {/* SEO Meta */}
      <Helmet>
        <title>Propel Foundry | <h1>Your Startup Growth Partner</h1></title>
        <meta
          name="description"
          content="Propel Foundry helps startups launch, scale, and succeed with expert mentorship, training, and community support."
        />
        <meta
          name="keywords"
          content="Propel Foundry, startup mentorship, startup training, startup community, business growth, investment guidance"
        />
      </Helmet>

      {/* Sections */}
      <Hero />
      <Community />
      <Training />
      <FAQ />
      <CTA />
      <Contact />
      <Footer />
    </>
  );
};

export default MainPage;
