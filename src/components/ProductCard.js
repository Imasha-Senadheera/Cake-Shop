import React from 'react';
import './ProductCard.css';

const ProductCard = ({ name, price, image }) => (
  <div className="product-card">
    <div className="product-image">
      <img src={image} alt={name} /> {/* Used the image prop */}
    </div>
    <h3>{name}</h3>
    <p>{price}</p>
    <button>Order This</button>
  </div>
);

export default ProductCard;