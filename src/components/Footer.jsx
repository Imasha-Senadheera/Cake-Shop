import React from "react";
import "../styles/Footer.css";

function Footer() {
  return (
    <footer>
      <div className="social-media">
        <a
          href="https://www.facebook.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="bi bi-facebook"></i>
        </a>
        <a
          href="https://www.twitter.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="bi bi-twitter"></i>
        </a>
        <a
          href="https://www.instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="bi bi-instagram"></i>
        </a>
        <a
          href="https://www.whatsapp.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="bi bi-whatsapp"></i>
        </a>
      </div>
      <p>&copy; 2024 Cake Shop. All Rights Reserved.</p>
    </footer>
  );
}

export default Footer;
