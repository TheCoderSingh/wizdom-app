const express = require("express");
const router = express.Router();
const User = require("../models/userModel");
const asyncHandler = require("express-async-handler");

const { protect } = require("../middleware/authMiddleware");
const { validateUserInput } = require("../middleware/validation");

// @desc    Get all users
// @route   GET /api/users
// @access  Private (Admin or authenticated user)
router.get(
  "/",
  protect,
  asyncHandler(async (req, res) => {
    const users = await User.find();
    res.status(200).json(users);
  })
);

// @desc    Get a single user by ID
// @route   GET /api/users/:id
// @access  Private
router.get(
  "/.id",
  protect,
  asyncHandler(async (req, res) => {
    const user = await User.findById(req.params.id);
    if (!user) {
      res.status(404).json({ message: "User not found" });
    }
    res.status(200).json(user);
  })
);

// @desc    Create a new user
// @route   POST /api/users
// @access  Public
router.post(
  "/",
  validateUserInput,
  asyncHandler(async (req, res) => {
    const {
      email,
      password,
      name,
      gender,
      location,
      hometown,
      website,
      role,
      currentTitle,
      previousTitles,
      yearsOfExperience,
      currentCompany,
      previousCompanies,
      industries,
      events,
      education,
      skills,
      techStack,
      bio,
      connectionPreferences,
      learningGoals,
    } = req.body;

    // Check if user exists
    const userExists = await User.findOne({ email });
    if (userExists) {
      res.status(400).json({ message: "User already exists" });
    }

    // Create user with both required and optional fields
    const user = await User.create({
      email,
      password,
      name,
      gender, // Optional
      location,
      hometown, // Optional
      website, // Optional
      role,
      currentTitle, // Optional
      previousTitles: previousTitles || [], // Optional
      yearsOfExperience,
      currentCompany, // Optional
      previousCompanies: previousCompanies || [], // Optional
      industries: industries || [], // Optional
      events: events || [], // Optional
      education: education || [], // Optional
      skills,
      techStack: techStack || [], // Optional
      bio, // Optional
      connectionPreferences,
      learningGoals,
    });

    if (user) {
      res.status(201).json(user);
    } else {
      res.status(400);
      throw new Error("Invalid user data");
    }
  })
);

// @desc    Update user profile
// @route   PUT /api/users/:id
// @access  Private
router.put(
  "/:id",
  protect,
  validateUserInput,
  asyncHandler(async (req, res) => {
    const user = await User.findById(req.params.id);
    if (!user) {
      res.status(404);
      throw new Error("User not found");
    }
    const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    res.status(200).json(updatedUser);
  })
);

// @desc    Delete a user
// @route   DELETE /api/users/:id
// @access  Private (Admin or user themselves)
router.delete(
  "/:id",
  protect,
  asyncHandler(async (req, res) => {
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user) {
      res.status(404);
      throw new Error("User not found");
    }
    res.status(200).json({ message: "User deleted" });
  })
);
