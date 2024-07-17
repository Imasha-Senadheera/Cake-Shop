import React from "react";
import chefImage from "../images/chef.png";
import "./AboutUs.css";

function AboutUs() {
  return (
    <section id="about-section" className="about-us">
      <img src={chefImage} alt="Chef" />
      <div className="about-text">
        <h2>About Us</h2>
        <p>
          Cooking was always my passion and I enjoyed it very much. It started
          at home, when I was baking for my relatives and friends. I also loved
          to decorate my pastries and sweets in a unique and creative manner.
        </p>
        <p>
          When I started taking pictures of my baking and posting it on my
          social media, different people started paying attention to my work and
          I was being asked to make custom cakes more and more often. At one
          point, it became too much for me to handle alone, and I decided to
          find an assistant. This assistant quickly proved to be invaluable,
          sharing my enthusiasm and dedication to creating the perfect desserts.
          With their help, I was able to take on more orders and explore new
          culinary challenges. As our collaboration grew, this assistant
          eventually became a full team member, contributing their own ideas and
          skills to our ever-expanding repertoire of delicious treats.
        </p>
        <p>
          Our story is a testament to the power of passion and perseverance.
          From humble beginnings, our love for baking and commitment to quality
          have driven us to achieve our dreams. We look forward to continuing
          this sweet journey, creating delightful experiences for our customers
          and spreading the joy of baking one dessert at a time.
        </p>
      </div>
    </section>
  );
}

export default AboutUs;
