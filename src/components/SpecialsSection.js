import React from "react"; // Import the React library
import ProductCard from "./ProductCard"; // Import the ProductCard component
import "./SpecialsSection.css"; // Import the CSS file for styling the SpecialsSection component
import image2 from "../images/image2.jpg"; // Import image files for product images
import image3 from "../images/image3.jpg";
import image4 from "../images/image4.jpg";
import image5 from "../images/image5.jpg";
import image6 from "../images/image6.jpg";
import image7 from "../images/image7.jpg";
import image8 from "../images/image8.jpg";
import image9 from "../images/image9.jpg";
import image10 from "../images/image10.jpg";
import image11 from "../images/image11.jpg";

// Define the SpecialsSection functional component
const SpecialsSection = () => (
  // Render the section element with a class of "specials"
  <section className="specials">
    
    <h2>This Week’s Specials</h2>
    
    <p>Try our most popular signature cakes and taste the difference!</p>

    {/* Container for the product cards */}
    <div className="products">
      {/* Render multiple ProductCard components with different props */}
      <ProductCard
        name="Pinky Cream Cherry Milk Cake"
        price="Rs 5000.00"
        image={image2}
      />
      <ProductCard
        name="Gummy Tosca Mixed Flavors Cake"
        price="Rs 5000.00"
        image={image3}
      />
      <ProductCard
        name="Blushing Strawberry Cake"
        price="Rs 5000.00"
        image={image4}
      />
      <ProductCard
        name="Mystery Rose Choco Cream Cake"
        price="Rs 5000.00"
        image={image5}
      />
      <ProductCard
        name="Pinky Cream Cherry Milk Cake"
        price="Rs 5000.00"
        image={image6}
      />
      <ProductCard
        name="Blue Gummy Mixed Flavors Cake"
        price="Rs 5000.00"
        image={image7}
      />
      <ProductCard
        name="Pink Blushing Cream Flavor Cake"
        price="Rs 5000.00"
        image={image8}
      />
      <ProductCard
        name="Mystery Purple Choco Cream Cake"
        price="Rs 5000.00"
        image={image9}
      />
      <ProductCard
        name="Pinky Cream Cherry Milk Cake"
        price="Rs 5000.00"
        image={image10}
      />
      <ProductCard
        name="Red Rose Tosca Mixed Flavors Cake"
        price="Rs 5000.00"
        image={image11}
      />
    </div>
  </section>
);

// Export the SpecialsSection component as the default export
export default SpecialsSection;
