import React from "react";
import ProductCard from "./ProductCard";
import "./SpecialsSection.css";
import image2 from "../images/image2.jpg";
import image3 from "../images/image3.jpg";
import image4 from "../images/image4.jpg";
import image5 from "../images/image5.jpg";
import image6 from "../images/image6.jpg";
import image7 from "../images/image7.jpg";
import image8 from "../images/image8.jpg";
import image9 from "../images/image9.jpg";
import image10 from "../images/image10.jpg";
import image11 from "../images/image11.jpg";

const SpecialsSection = () => (
  <section className="specials">
    <h2>This Week’s Specials</h2>
    <p>Try our most popular signature cakes and taste the difference!</p>
    <div className="products">
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
        name="Blushing Strawberry Cream Cake"
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

export default SpecialsSection;
