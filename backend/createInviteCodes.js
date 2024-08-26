require("dotenv").config(); // Load environment variables
const mongoose = require("mongoose");
const InviteCode = require("./models/InviteCode"); // Adjust path as needed

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => {
    console.error("Failed to connect to MongoDB", err);
    process.exit(1); // Exit process with failure
  });

// Function to create a new invite code
const createInviteCode = async (code, role) => {
  try {
    // Check if invite code already exists
    const existingCode = await InviteCode.findOne({ code });
    if (existingCode) {
      console.log(`Invite code "${code}" already exists.`);
      return;
    }

    const inviteCode = new InviteCode({ code, role });
    await inviteCode.save();
    console.log(`Invite code "${code}" created successfully`);
  } catch (error) {
    console.error("Error creating invite code:", error);
  }
};

// Create some invite codes
const createCodes = async () => {
  await createInviteCode("ADMIN123", "admin");
  await createInviteCode("STORE456", "store manager");
  mongoose.connection.close(); // Close the connection after operation
};

createCodes();
