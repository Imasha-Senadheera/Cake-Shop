import React from "react";
import ProductCard from "./ProductCard";
import "../styles/SpecialsSection.css";
import image2 from "../assets/images/image2.jpg";
import image3 from "../assets/images/image3.jpg";
import image4 from "../assets/images/image4.jpg";
import image5 from "../assets/images/image5.jpg";
import image6 from "../assets/images/image6.jpg";
import image7 from "../assets/images/image7.jpg";
import image8 from "../assets/images/image8.jpg";
import image9 from "../assets/images/image9.jpg";
import image10 from "../assets/images/image10.jpg";
import image11 from "../assets/images/image11.jpg";

const SpecialsSection = () => (
  <section id="specials-section" className="specials">
    <h2>This Week’s Specials</h2>
    <p>Try our most popular signature cakes and taste the difference!</p>

    <div className="products">
      {/* Render ProductCard components with different props */}
      <ProductCard
        name="Pinky Cream Cherry Milk Cake"
        price="Rs 5000.00"
        image={image2} // Assuming you have imported the image correctly
      />
      <ProductCard
        name="Gummy Tosca Mixed Flavors Cake"
        price="Rs 5000.00"
        image={image3}
      />
      <ProductCard
        name="Blushing Strawberry Flavors Cake"
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

    {/* Button to view more products */}
    <button className="view-more-button">View More Products</button>
  </section>
);

export default SpecialsSection;