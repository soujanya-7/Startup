import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Training from "./components/Training";
import CTA from "./components/CTA";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";

function App() {
  const [route, setRoute] = React.useState(window.location.hash || "#/");

  React.useEffect(() => {
    const onHashChange = () => setRoute(window.location.hash || "#/");
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  const About = React.lazy(() => import("./pages/About"));
  const ContactPage = React.lazy(() => import("./pages/Contact"));
  const ServicesPage = React.lazy(() => import("./pages/Services"));
  const CommunityPage = React.lazy(() => import("./pages/Community"));

  return (
    <div>
      <Header />
      <React.Suspense fallback={null}>
        {route === "#/about" ? (
          <About />
        ) : route === "#/contact" ? (
          <ContactPage />
        ) : route === "#/services" ? (
          <ServicesPage />
        ) : route === "#/community" ? (
          <CommunityPage />
        ) : (
          <>
            <Hero />
            <Training />
            <CTA />
            <FAQ />
          </>
        )}
      </React.Suspense>
      <Footer />
    </div>
  );
}

export default App;
