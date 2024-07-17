import React from "react"; // Import the React library
import "./Header.css"; // Import the CSS file for styling the Header component

// Define the Header functional component
function Header() {
  return (
    // Render the header element with a class of "header"

    <header className="header">
      {/* Logo section */}
      <div className="logo">Cake Shop</div>

      {/* Navigation menu */}
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

      {/* Account and Cart icons */}
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

// Export the Header component as the default export
export default Header;
