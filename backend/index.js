const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Failed to connect to MongoDB", err);
  });

// Define routes
app.get("/", (req, res) => {
  res.send("API is running");
});

// Example route to get products
app.get("/api/products", (req, res) => {
  // Logic to get products (e.g., querying MongoDB)
  res.send("Products endpoint");
});

// Example route to add a new product
app.post("/api/products", (req, res) => {
  // Logic to add a new product (e.g., saving to MongoDB)
  const newProduct = req.body;
  res.send(`Product added: ${JSON.stringify(newProduct)}`);
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something went wrong!");
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
