import React from 'react';
import { useCart } from './CartProvider';  // Correct import path
import '../styles/CartPage.css';  // Ensure this file exists

const CartPage = () => {
  const { cartItems, handleRemove, handleQuantityChange } = useCart();

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div className="cart-page">
      <h1>Shopping Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div className="cart-items">
          {cartItems.map((item, index) => (
            <div key={index} className="cart-item">
              <img src={item.image} alt={item.name} className="cart-item-image" />
              <div className="cart-item-details">
                <h2>{item.name}</h2>
                <p>{item.description}</p>
                <div className="cart-item-actions">
                  <label>
                    Quantity: &nbsp;
                    <input
                      type="number"
                      value={item.quantity}
                      min="1"
                      onChange={(e) => handleQuantityChange(index, parseInt(e.target.value))}
                    />
                  </label>
                  <button onClick={() => handleRemove(index)}>Remove</button>
                </div>
                <p className="cart-item-price">Rs. {item.price}</p>
              </div>
            </div>
          ))}
        </div>
      )}
      <div className="cart-total">
        <h2>Total: Rs. {calculateTotal().toFixed(2)}</h2>
      </div>
    </div>
  );
};

export default CartPage;
