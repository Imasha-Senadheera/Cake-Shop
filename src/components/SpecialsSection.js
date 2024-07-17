import React from "react";
import ProductCard from "./ProductCard";
import "./SpecialsSection.css";
import image2 from "../images/image2.jpg";
import image3 from "../images/image3.jpg";
import image4 from "../images/image4.jpg";
import image5 from "../images/image5.jpg";

const SpecialsSection = () => (
  <section className="specials">
    <h2>This Week’s Specials</h2>
    <p>Try our most popular signature cakes and taste the difference!</p>
    <div className="products">
      <ProductCard
        name="Pinky Cream Cherry Milk"
        price="Rs 5000.00"
        image={image2}
      />
      <ProductCard
        name="Gummy Tosca Mixed Flavors"
        price="Rs 5000.00"
        image={image3}
      />
      <ProductCard
        name="Blushing Strawberry Cream"
        price="Rs 5000.00"
        image={image4}
      />
      <ProductCard
        name="Mystery Rose Choco Cream"
        price="Rs 5000.00"
        image={image5}
      />
      <ProductCard
        name="Pinky Cream Cherry Milk"
        price="Rs 5000.00"
        image={image2}
      />
      <ProductCard
        name="Gummy Tosca Mixed Flavors"
        price="Rs 5000.00"
        image={image3}
      />
      <ProductCard
        name="Blushing Strawberry Cream"
        price="Rs 5000.00"
        image={image4}
      />
      <ProductCard
        name="Mystery Rose Choco Cream"
        price="Rs 5000.00"
        image={image5}
      />
      <ProductCard
        name="Pinky Cream Cherry Milk"
        price="Rs 5000.00"
        image={image2}
      />
      <ProductCard
        name="Gummy Tosca Mixed Flavors"
        price="Rs 5000.00"
        image={image3}
      />
    </div>
  </section>
);

export default SpecialsSection;
