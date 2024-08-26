// routes/inviteCodes.js
const express = require("express");
const router = express.Router();
const InviteCode = require("../models/InviteCode"); // Adjust path as needed

// POST /api/invite-codes
router.post("/", async (req, res) => {
  const { code, role } = req.body;

  if (!code || !role) {
    return res.status(400).json({ message: "Code and role are required" });
  }

  try {
    const existingCode = await InviteCode.findOne({ code });
    if (existingCode) {
      return res.status(400).json({ message: `Invite code "${code}" already exists.` });
    }

    const inviteCode = new InviteCode({ code, role });
    await inviteCode.save();
    res.status(201).json({ message: `Invite code "${code}" created successfully` });
  } catch (error) {
    res.status(500).json({ message: "Error creating invite code", error });
  }
});

module.exports = router;
