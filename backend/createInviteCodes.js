require("dotenv").config();
const mongoose = require("mongoose");
const InviteCode = require("./models/InviteCode");

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const createInviteCode = async (code, role) => {
  try {
    const inviteCode = new InviteCode({ code, role });
    await inviteCode.save();
    console.log("Invite code created successfully");
  } catch (error) {
    console.error("Error creating invite code:", error);
  }
};

const createCodes = async () => {
  await createInviteCode("ADMIN123", "admin");
  await createInviteCode("STORE456", "store manager");
  mongoose.connection.close();
};

createCodes();
