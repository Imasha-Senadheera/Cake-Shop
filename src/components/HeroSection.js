import React from 'react';
import './HeroSection.css'; // Make sure to import your CSS file
import image1 from '../images/image1.png'; 

const HeroSection = () => (
  <section className="hero" style={{ backgroundImage: `url(${require('../images/bg1.png')})` }}>
    <div className="hero-content">
      <h1>Yummy sweeties delivered to your dining table!</h1>
      <p>Delight in our exquisite cakes and treats, crafted to perfection for your enjoyment.</p>
      <div className="hero-buttons">
        <button>Login</button>
        <button>Register</button>
      </div>
    </div>
    <div className="hero-image">
      <img src={image1} alt="Cupcakes" />
    </div>
  </section>
);

export default HeroSection;
