import React from "react";
import "../styles/ProductCard.css"; // Import the CSS file for styling

const ProductCard = ({ name, price, image }) => (
  <div className="product-card">
    <div className="product-image">
      <img src={image} alt={name} />
    </div>
    <div className="product-info">
      <h3>{name}</h3>
      <p>{price}</p>
    </div>
    <div className="order-button">
      <button>Add to Cart</button>
    </div>
  </div>
);

export default ProductCard;