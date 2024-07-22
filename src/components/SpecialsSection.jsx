import React from "react";
import { useNavigate } from "react-router-dom";
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

const SpecialsSection = () => {
  const navigate = useNavigate();

  const handleViewMore = () => {
    navigate("/products");
  };

  return (
    <section id="specials-section" className="specials">
      <h2>This Week’s Specials</h2>
      <p>Try our most popular signature cakes and taste the difference!</p>
      <div className="products">
        <ProductCard
          name="Pinky Cream Cherry Milk Cake"
          price="Rs 5000.00"
          image={image2}
        />
        <ProductCard
          name="Gummy Tosca Flavors Cake"
          price="Rs 5000.00"
          image={image3}
        />
        <ProductCard
          name="Blushing Strawberry Cake"
          price="Rs 5000.00"
          image={image4}
        />
        <ProductCard
          name="Mystery Rose Cream Cake"
          price="Rs 5000.00"
          image={image5}
        />
        <ProductCard
          name="Pinky Cream Cherry Milk Cake"
          price="Rs 5000.00"
          image={image6}
        />
        <ProductCard
          name="Blue Gummy Flavors Cake"
          price="Rs 5000.00"
          image={image7}
        />
        <ProductCard
          name="Pink Blushing Cream Cake"
          price="Rs 5000.00"
          image={image8}
        />
        <ProductCard
          name="Mystery Purple Cream Cake"
          price="Rs 5000.00"
          image={image9}
        />
        <ProductCard
          name="Pinky Cream Cherry Rose Cake"
          price="Rs 5000.00"
          image={image10}
        />
        <ProductCard
          name="Red Rose Tosca Flavors Cake"
          price="Rs 5000.00"
          image={image11}
        />
      </div>
      <button className="view-more-button" onClick={handleViewMore}>
        View More Products
      </button>
    </section>
  );
};

export default SpecialsSection;
