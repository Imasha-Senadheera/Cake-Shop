import React, { createContext, useContext, useState } from "react";
import image3 from "../assets/images/image3.jpg";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const handleRemove = (index) => {
    const newCartItems = [...cartItems];
    newCartItems.splice(index, 1);
    setCartItems(newCartItems);
  };

  const handleQuantityChange = (index, quantity) => {
    const newCartItems = [...cartItems];
    newCartItems[index].quantity = quantity;
    setCartItems(newCartItems);
  };

  const handleAddToCart = (product) => {
    setCartItems((prevItems) => {
      // Check if the product is already in the cart
      const existingItemIndex = prevItems.findIndex(
        (item) => item.name === product.name
      );
      if (existingItemIndex > -1) {
        // If product is already in the cart, update quantity
        const updatedItems = [...prevItems];
        updatedItems[existingItemIndex].quantity += product.quantity;
        return updatedItems;
      } else {
        // If product is not in the cart, add it
        return [...prevItems, product];
      }
    });
  };

  return (
    <CartContext.Provider
      value={{ cartItems, handleRemove, handleQuantityChange, handleAddToCart }}
    >
      {children}
    </CartContext.Provider>
  );
};
