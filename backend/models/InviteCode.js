const mongoose = require("mongoose");

const inviteCodeSchema = new mongoose.Schema({
  code: { type: String, required: true, unique: true },
  role: { type: String, required: true, enum: ["admin", "store manager"] },
  used: { type: Boolean, default: false }
});

const InviteCode = mongoose.model("InviteCode", inviteCodeSchema);

module.exports = InviteCode;

