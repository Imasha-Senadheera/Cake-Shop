import React from "react"; // Import the React library
import "./ProductCard.css"; // Import the CSS file for styling the ProductCard component

// Define the ProductCard functional component that takes in props: name, price, and image
const ProductCard = ({ name, price, image }) => (
  // Render the main container div with a class of "product-card"


  <div className="product-card">
    {/* Container for the product image */}
    <div className="product-image">
      <img src={image} alt={name} />{" "}
      {/* Display the image prop with alt text as the name prop */}
    </div>

    {/* Display the product name */}
    <h3>{name}</h3>

    {/* Display the product price */}
    <p>{price}</p>

    {/* Order button */}
    <button>Order This</button>
  </div>
);

// Export the ProductCard component as the default export
export default ProductCard;
