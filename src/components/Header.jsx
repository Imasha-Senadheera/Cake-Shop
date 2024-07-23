import React from "react";
import { Link } from "react-router-dom";
import "../styles/Header.css";

function Header() {
  return (
    <header className="header">
      <div className="logo">Cake Shop</div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/products">Product</Link>
          </li>
          <li>
          <a href="#about-section">About us</a>
          </li>
          <li>
          <a href="#contact-section">Contact</a>
          </li>
        </ul>
      </nav>
      <div className="account-cart">
        <a href="#my-account" className="person">
          <i className="bi bi-person-fill"></i>
        </a>
        <Link to="/cart" className="cart">
          <i className="bi bi-cart-check-fill"></i>
        </Link>
      </div>
    </header>
  );
}

export default Header;
