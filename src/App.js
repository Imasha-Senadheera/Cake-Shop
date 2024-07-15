import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import SpecialsSection from './components/SpecialsSection';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <SpecialsSection />
    </div>
  );
}

export default App;
