// server.js
require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const authRoutes = require("./routes/auth");
const inviteCodesRoutes = require("./routes/inviteCodes");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Failed to connect to MongoDB", err));

// Use the routes with /api prefix
app.use("/api", authRoutes); // Authentication routes
app.use("/api/invite-codes", inviteCodesRoutes); // Invite codes routes

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
