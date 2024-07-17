import React from "react";
import "./Header.css";

function Header() {
  // Function to handle smooth scroll
  const handleSmoothScroll = (event, id) => {
    event.preventDefault(); // Prevent default anchor behavior
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" }); 
    }
  };

  return (
    <header className="header">
      <div className="logo">Cake Shop</div>
      <nav>
        <ul>
          <li>
            <a href="#home" onClick={(e) => handleSmoothScroll(e, "home")}>
              Home
            </a>
          </li>
          <li>
            <a
              href="#specials-section"
              onClick={(e) => handleSmoothScroll(e, "specials-section")}
            >
              Product
            </a>
          </li>
          <li>
            <a
              href="#about-section"
              onClick={(e) => handleSmoothScroll(e, "about-section")}
            >
              About us
            </a>
          </li>
          <li>
            <a
              href="#contact-section"
              onClick={(e) => handleSmoothScroll(e, "contact-section")}
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
      <div className="account-cart">
        <a href="#my-account" className="person">
          <i className="bi bi-person-fill"></i>{" "}
        </a>
        <a href="#cart" className="cart">
          <i className="bi bi-cart-check-fill"></i>{" "}
        </a>
      </div>
    </header>
  );
}

export default Header;
