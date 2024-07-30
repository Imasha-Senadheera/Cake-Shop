import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/Header.css";

function Header() {
  const navigate = useNavigate();

  const handleScroll = (e, hash) => {
    e.preventDefault();
    navigate(hash);
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
        <Link to="/account" className="person"> 
          <i className="bi bi-person-fill"></i>
        </Link>
        <Link to="/cart" className="cart">
          <i className="bi bi-cart-check-fill"></i>
        </Link>
      </div>
    </header>
  );
}

export default Header;
