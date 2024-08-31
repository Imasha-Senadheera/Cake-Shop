import React, { createContext, useContext, useState } from "react";

// Create a Context for the Cart
const CartContext = createContext();

// Custom hook to use Cart context
export const useCart = () => useContext(CartContext);

// Provider component that wraps the application and provides cart context
export const CartProvider = ({ children }) => {
  // State to store the items in the cart
  const [cartItems, setCartItems] = useState([]);

  // Function to remove an item from the cart by index
  const handleRemove = (index) => {
    // Create a copy of the cart items
    const newCartItems = [...cartItems];
    // Remove the item at the specified index
    newCartItems.splice(index, 1);
    // Update the cart items state
    setCartItems(newCartItems);
  };

  // Function to change the quantity of an item in the cart
  const handleQuantityChange = (index, quantity) => {
    // Create a copy of the cart items
    const newCartItems = [...cartItems];
    // Update the quantity of the item at the specified index
    newCartItems[index].quantity = quantity;
    // Update the cart items state
    setCartItems(newCartItems);
  };

  // Function to add a product to the cart
  const handleAddToCart = (product) => {
    setCartItems((prevItems) => {
      // Check if the product is already in the cart
      const existingItemIndex = prevItems.findIndex(
        (item) => item.name === product.name
      );
      if (existingItemIndex > -1) {
        // If the product is already in the cart, update its quantity
        const updatedItems = [...prevItems];
        updatedItems[existingItemIndex].quantity += product.quantity;
        return updatedItems;
      } else {
        // If the product is not in the cart, add it as a new item
        return [...prevItems, product];
      }
    });
  };

  // Provide cart state and handlers to the rest of the application
  return (
    <CartContext.Provider
      value={{ cartItems, handleRemove, handleQuantityChange, handleAddToCart }}
    >
      {children}
    </CartContext.Provider>
  );
};
