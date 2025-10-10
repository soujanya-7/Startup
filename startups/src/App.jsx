import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Solution from "./components/Solution"; // <-- new section
import Registration from "./components/Registration";
import Training from "./components/Training";
import CTA from "./components/CTA";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <Services />
      <Solution />        
      <Registration />
      <Training />
      <CTA />       
      <FAQ />       
      <Footer />
    </div>
  );
}

export default App;
