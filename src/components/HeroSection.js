import React from "react"; // Import the React library
import "./HeroSection.css"; // Import the CSS file for styling the HeroSection component
import image1 from "../images/image1.png"; // Import the image to be used in the component

// Define the HeroSection functional component
const HeroSection = () => (
  // Render the section element with a class of "hero"
  // Apply a background image using inline styles

  <section
    className="hero"
    style={{ backgroundImage: `url(${require("../images/bg1.png")})` }}
  >
    
    {/* Content within the hero section */}
    <div className="hero-content">
      <h1>Yummy sweeties delivered to your dining table!</h1>
      <p>
        Delight in our exquisite cakes and treats, crafted to perfection for
        your enjoyment.
      </p>

      {/* Buttons for user actions */}
      <div className="hero-buttons">
        <button><b>Login</b></button>
        <button><b>Register</b></button>
      </div>
    </div>

    {/* Image within the hero section */}
    <div className="hero-image">
      <img src={image1} alt="HeroCakes" />
    </div>
  </section>
);

// Export the HeroSection component as the default export
export default HeroSection;
