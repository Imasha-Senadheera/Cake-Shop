import React, { useState } from "react";
import Header from "./Header"; // Import the Header component
import Footer from "./Footer"; // Import the Footer component
import ProductCard from "./ProductCard";
import "../styles/ProductsPage.css";
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

const ProductsPage = () => {
  const [filter, setFilter] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const products = [
    {
      name: "Pinky Cream Cherry Milk Cake",
      price: "Rs 5000.00",
      image: image2,
      category: "Designed cakes",
    },
    {
      name: "Gummy Tosca Mixed Flavors Cake",
      price: "Rs 5000.00",
      image: image3,
      category: "Mini cakes",
    },
    {
      name: "Blushing Strawberry Flavors Cake",
      price: "Rs 5000.00",
      image: image4,
      category: "Cup cakes",
    },
    {
      name: "Mystery Rose Choco Cream Cake",
      price: "Rs 5000.00",
      image: image5,
      category: "Floor cakes",
    },
    {
      name: "Pinky Cream Cherry Milk Cake",
      price: "Rs 5000.00",
      image: image6,
      category: "Designed cakes",
    },
    {
      name: "Blue Gummy Mixed Flavors Cake",
      price: "Rs 5000.00",
      image: image7,
      category: "Mini cakes",
    },
    {
      name: "Pink Blushing Cream Flavor Cake",
      price: "Rs 5000.00",
      image: image8,
      category: "Cup cakes",
    },
    {
      name: "Mystery Purple Choco Cream Cake",
      price: "Rs 5000.00",
      image: image9,
      category: "Floor cakes",
    },
    {
      name: "Pinky Cream Cherry Milk Cake",
      price: "Rs 5000.00",
      image: image10,
      category: "Designed cakes",
    },
    {
      name: "Red Rose Tosca Mixed Flavors Cake",
      price: "Rs 5000.00",
      image: image11,
      category: "Mini cakes",
    },
  ];

  const handleFilter = (category) => setFilter(category);

  const handleSearchChange = (e) =>
    setSearchQuery(e.target.value.toLowerCase());

  const filteredProducts = products.filter((product) => {
    const matchesCategory = filter === "All" || product.category === filter;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery);
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      <Header /> {/* Add the Header component */}
      <section id="products-page">
        <div className="top-bar">
          <div className="search-bar">
            <input
              type="text"
              placeholder="Search for cakes..."
              value={searchQuery}
              onChange={handleSearchChange}
            />
          </div>

          <div className="categories">
            <button
              className={filter === "All" ? "active" : ""}
              onClick={() => handleFilter("All")}
            >
              All
            </button>
            <button
              className={filter === "Designed cakes" ? "active" : ""}
              onClick={() => handleFilter("Designed cakes")}
            >
              Designed cakes
            </button>
            <button
              className={filter === "Mini cakes" ? "active" : ""}
              onClick={() => handleFilter("Mini cakes")}
            >
              Mini cakes
            </button>
            <button
              className={filter === "Cup cakes" ? "active" : ""}
              onClick={() => handleFilter("Cup cakes")}
            >
              Cup cakes
            </button>
            <button
              className={filter === "Floor cakes" ? "active" : ""}
              onClick={() => handleFilter("Floor cakes")}
            >
              Floor cakes
            </button>
          </div>
        </div>

        <div className="products">
          {filteredProducts.map((product, index) => (
            <ProductCard
              key={index}
              name={product.name}
              price={product.price}
              image={product.image}
            />
          ))}
        </div>
      </section>
      <Footer /> {/* Add the Footer component */}
    </>
  );
};

export default ProductsPage;
