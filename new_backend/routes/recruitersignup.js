const express = require("express");
const bcrypt = require("bcrypt");
const Recruiters = require("../models/Recruiter"); // Import the User model
const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { companyname, password } = req.body;

    if (!companyname || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // Checking if the user already exists
    const existingUser = await Recruiters.findOne({ companyname });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new Recruiters({
      companyname,
      password: hashedPassword,
    });

    await newUser.save(); // Save the user to the database

    res.status(201).json({
      message: "Recruiter created successfully",
      user: newUser.toJSON(),
    });
  } catch (error) {
    console.error("Signup error:", error);
    res.status(500).json({ message: "Error creating user" });
  }
});

module.exports = router;
