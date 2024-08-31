import React from "react";
import { useCart } from "./CartProvider"; // Import the custom hook to access cart context
import "../styles/CartPage.css"; // Import the CSS styles for the cart page

const CartPage = () => {
  // Destructure the cart context values
  const { cartItems, handleRemove, handleQuantityChange } = useCart();

  // Calculate the total price of the items in the cart
  const calculateTotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  return (
    <div className="cart-page">
      <h1>Shopping Cart</h1>
      {/* Check if the cart is empty */}
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div className="cart-items">
          {/* Render each item in the cart */}
          {cartItems.map((item, index) => (
            <div key={index} className="cart-item">
              {/* Display the item's image */}
              <img
                src={item.image}
                alt={item.name}
                className="cart-item-image"
              />
              <div className="cart-item-details">
                {/* Display the item's name and description */}
                <h2>{item.name}</h2>
                <p>{item.description}</p>
                <div className="cart-item-actions">
                  {/* Input to change the quantity of the item */}
                  <label>
                    Quantity: &nbsp;
                    <input
                      type="number"
                      value={item.quantity}
                      min="1"
                      onChange={(e) =>
                        handleQuantityChange(index, parseInt(e.target.value))
                      }
                    />
                  </label>
                  {/* Button to remove the item from the cart */}
                  <button onClick={() => handleRemove(index)}>Remove</button>
                </div>
                {/* Display the price of the item */}
                <p className="cart-item-price">Rs. {item.price}</p>
              </div>
            </div>
          ))}
        </div>
      )}
      {/* Display the total price of all items in the cart */}
      <div className="cart-total">
        <h2>Total: Rs. {calculateTotal().toFixed(2)}</h2>
      </div>
    </div>
  );
};

export default CartPage;
