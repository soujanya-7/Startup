import React, { useState, useEffect } from "react";
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

function App() {
  const [route, setRoute] = useState(window.location.hash || "#/");

  // Listen for hash changes
  useEffect(() => {
    const onHashChange = () => setRoute(window.location.hash || "#/");
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  // Smooth scroll to top on route change
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }
  }, [route]);

  // Render components based on current route
  const renderRoute = () => {
    switch (route) {
      case "#/about":
        return <About />;
      case "#/contact":
        return <Contact />;
      case "#/services":
        return <Services />;
      case "#/community":
        return <Community />;
      default:
        return (
          <>
            <Hero />
            <Training />
            <CTA />
            <FAQ />
          </>
        );
    }
  };

  return (
    <div>
      <Header />
      {renderRoute()}
      <Footer />
    </div>
  );
}

export default App;
