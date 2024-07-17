import React from "react";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="logo">Cake Shop</div>
      <nav>
        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#cupcake">Product</a>
          </li>
          <li>
            <a href="#recipes">About us</a>
          </li>
          <li>
            <a href="#blog">Contact</a>
          </li>
        </ul>
      </nav>
      <div className="account-cart">
        <a href="#my-account" className="person">
          <i className="bi bi-person-fill"></i>
        </a>
        <a href="#cart" className="cart">
          <i className="bi bi-cart-check-fill"></i>
        </a>
      </div>
    </header>
  );
}

export default Header;
