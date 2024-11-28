const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
    minLength: 6,
  },
  name: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: false,
  },
  location: {
    type: String,
    required: true,
  },
  hometown: {
    type: String,
    required: false,
  },
  website: {
    type: String,
    required: false,
  },
  role: {
    type: String,
    required: true,
  },
  currentTitle: {
    type: String,
    required: false,
  },
  previousTitles: [
    {
      type: String,
      required: false,
    },
  ],
  yearsOfExperience: {
    type: Number,
    required: true,
  },
  currentCompany: {
    type: String,
    required: false,
  },
  previousCompanies: [
    {
      type: String,
      required: false,
    },
  ],
  education: {
    school: String,
    degree: String,
    required: false,
  },
  skills: [
    {
      type: String,
      required: true,
      minSkills: 1,
    },
  ],
  techStack: [
    {
      type: String,
      required: false,
    },
  ],
  bio: {
    type: String,
    required: false,
  },
  connectWith: {
    type: String,
    required: true,
  },
  learningGoals: {
    type: String,
    required: true,
  },
  expertiseSkills: {
    type: String,
    required: true,
  },
  matches: [
    {
      type: mongoose.Schema.ObjectId,
      ref: "User",
    },
  ],
});
module.exports = mongoose.model("User", userSchema);
