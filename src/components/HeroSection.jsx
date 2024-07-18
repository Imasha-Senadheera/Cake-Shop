import React, { useState } from "react";
import "../styles/HeroSection.css";
import Modal from "./Modal";
import image1 from "../assets/images/image1.png";

const HeroSection = () => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);

  const openLoginModal = () => {
    setIsLoginOpen(true);
  };

  const closeLoginModal = () => {
    setIsLoginOpen(false);
  };

  const openRegisterModal = () => {
    setIsRegisterOpen(true);
  };

  const closeRegisterModal = () => {
    setIsRegisterOpen(false);
  };

  const handleLogin = (credentials) => {
    console.log("Logging in with:", credentials);
    setIsLoginOpen(false); // Close the login modal after login
  };

  const handleRegister = (userData) => {
    console.log("Registering user:", userData);
    setIsRegisterOpen(false); // Close the register modal after registration
  };

  return (
    <section
      className="hero"
      style={{ backgroundImage: `url(${require("../assets/images/bg1.png")})` }}
    >
      <div className="hero-content">
        <h1>Yummy sweeties delivered to your dining table!</h1>
        <p>Delight in our exquisite cakes and treats, crafted to perfection for your enjoyment.</p>
        <div className="hero-buttons">
          <button onClick={openLoginModal}><b>Login</b></button>
          <button onClick={openRegisterModal}><b>Register</b></button>
        </div>
      </div>
      <div className="hero-image">
        <img src={image1} alt="HeroCakes" />
      </div>
      {/* Render the Modal components conditionally */}
      {isLoginOpen && <Modal type="login" onClose={closeLoginModal} onLogin={handleLogin} />}
      {isRegisterOpen && <Modal type="register" onClose={closeRegisterModal} onRegister={handleRegister} />}
    </section>
  );
};

export default HeroSection;
