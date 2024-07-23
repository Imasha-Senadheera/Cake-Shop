import React, { createContext, useContext, useState } from "react";
import image3 from "../assets/images/image3.jpg";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([
    { name: "Pinky Cream Cherry Milk Cake", quantity: 2, price: 5000, image: image3 },
    
  ]);

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

  return (
    <CartContext.Provider value={{ cartItems, handleRemove, handleQuantityChange }}>
      {children}
    </CartContext.Provider>
  );
};
