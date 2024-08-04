import React from "react";
import { useCart } from "./CartProvider";
import "../styles/ProductCard.css";

const ProductCard = ({ name, price, image }) => {
  const { handleAddToCart } = useCart();

  const addToCart = () => {
    const product = {
      name,
      price: parseFloat(price.replace("Rs ", "")), // Convert price to number
      image,
      quantity: 1, // Default quantity
    };
    handleAddToCart(product);
  };

  return (
    <div className="product-card">
      <div className="product-image">
        <img src={image} alt={name} />
      </div>
      <div className="product-info">
        <h3>{name}</h3>
        <p>{price}</p>
      </div>
      <div className="order-button">
        <button onClick={addToCart}>Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductCard;
