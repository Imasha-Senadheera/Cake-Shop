import React from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import SpecialsSection from "./components/SpecialsSection";
import AboutUs from "./components/AboutUs";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection id="home" />
      <SpecialsSection id="specials-section" />
      <AboutUs id="about-section" />
      <Contact id="contact-section" />
      <Footer />
    </div>
  );
}

export default App;
