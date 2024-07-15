import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="logo">Cake Shop</div>
      <nav>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#cupcake">Product</a></li>
          <li><a href="#recipes">About us</a></li>
          <li><a href="#blog">Contact</a></li>
        </ul>
      </nav>
      <div className="account-cart">
        <a href="#my-account">My Account</a>
        <a href="#cart">Cart</a>
      </div>
    </header>
  );
}

export default Header;
