import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "./CartProvider"; // Import the useCart hook
import "../styles/Header.css";

function Header() {
  const navigate = useNavigate();
  const { cartItems } = useCart();

  const handleScroll = (e, hash) => {
    e.preventDefault();
    navigate(hash);
  };

  // Calculate total number of items in the cart
  const getTotalItems = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  return (
    <header className="header">
      <div className="logo">Cake Shop</div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
          <li>
            <a
              href="/#about-section"
              onClick={(e) => handleScroll(e, "/#about-section")}
            >
              About Us
            </a>
          </li>
          <li>
            <a
              href="/#contact-section"
              onClick={(e) => handleScroll(e, "/#contact-section")}
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
      <div className="account-cart">
        <a href="/account" className="person">
          <i className="bi bi-person-fill"></i>
        </a>
        <Link to="/cart" className="cart">
          <i className="bi bi-cart-check-fill"></i>
          {getTotalItems() > 0 && (
            <span className="cart-item-count">{getTotalItems()}</span>
          )}
        </Link>
      </div>
    </header>
  );
}

export default Header;
