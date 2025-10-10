import React from "react";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Registration from "../components/Registration";
import Training from "../components/Training";
import CTA from "../components/CTA";
import FAQ from "../components/FAQ";

const Home = () => {
  return (
    <div>
      <Hero />
      <Services />
      <Registration />
      <Training />
      <CTA />
      <FAQ />
    </div>
  );
};

export default Home;
