import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Training from "./components/Training";
import CTA from "./components/CTA";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import About from "./components/About";
import Contact from "./components/Contact";
import Services from "./components/Services";
import Community from "./components/Community";
import Opportunities from "./components/Opportunities";
import EventDetail from "./components/EventDetail";
import NotFound from "./components/404pagenotfount";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route
          path="/home"
          element={
            <>
              <Hero />
              <Training />
              <CTA />
              <FAQ />
            </>
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
        <Route path="/community" element={<Community />} />
        <Route path="/opportunities" element={<Opportunities />} />
        <Route path="/event/:id" element={<EventDetail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
