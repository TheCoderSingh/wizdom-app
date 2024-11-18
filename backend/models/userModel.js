const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  email: String,
  password: String,
  name: String,
  gender: String,
  location: String,
  hometown: String,
  website: String,
  role: String,
  currentTitle: String,
  previousTitles: [String],
  yearsOfExperience: Number,
  currentCompany: String,
  previousCompanies: [String],
  education: {
    school: String,
    degree: String,
  },
  skills: [String],
  techStack: [String],
  bio: String,
  connectWith: String,
  learningGoals: String,
  expertiseSkills: String,
  matches: [
    {
      type: mongoose.Schema.ObjectId,
      ref: "User",
    },
  ],
});
module.exports = mongoose.model("User", userSchema);
