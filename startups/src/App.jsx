import React from "react";
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
  const [route, setRoute] = React.useState(window.location.hash || "#/");

  React.useEffect(() => {
    const onHashChange = () => setRoute(window.location.hash || "#/");
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  // Direct imports used; no lazy-loading

  return (
    <div>
      <Header />
      {route === "#/about" ? (
        <About />
      ) : route === "#/contact" ? (
        <Contact />
      ) : route === "#/services" ? (
        <Services />
      ) : route === "#/community" ? (
        <Community />
      ) : (
        <>
          <Hero />
          <Training />
          <CTA />
          <FAQ />
        </>
      )}
      <Footer />
    </div>
  );
}

export default App;
