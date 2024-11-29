const mongoose = require("mongoose");
const { isValidWebsite, hasValidSkills } = require("../middleware/validation");

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
    minlength: 6,
  },
  name: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    enum: ["Male", "Female", "Other"],
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
    validate: {
      validator: (url) => isValidWebsite(url).isValid,
      message: (props) => isValidWebsite(props.value).message,
    },
  },
  role: {
    type: String,
    required: true,
  },
  currentTitle: {
    type: String,
    required: false,
  },
  previousTitles: {
    type: [String],
    required: false,
  },
  yearsOfExperience: {
    type: Number,
    required: true,
    min: 0,
  },
  currentCompany: {
    type: String,
    required: false,
  },
  previousCompanies: {
    type: [String],
    required: false,
  },
  industries: {
    type: [String],
    required: false,
  },
  events: {
    type: [String],
    required: false,
  },
  education: [
    {
      school: { type: String },
      degree: { type: String },
    },
  ],
  skills: {
    type: [String],
    required: true,
    validate: {
      validator: (skills) => hasValidSkills(skills).isValid,
      message: (props) => hasValidSkills(props.value).message,
    },
    default: [],
  },
  techStack: {
    type: [String],
    required: false,
    default: [],
  },
  bio: {
    type: String,
    maxlength: 500,
    required: false,
  },
  connectionPreferences: {
    type: [String],
    required: true,
    default: [],
  },
  learningGoals: {
    type: [String],
    required: true,
    default: [],
  },
  expertiseSkills: {
    type: [String],
    required: true,
    default: [],
  },
  matches: [
    {
      userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
      status: {
        type: String,
        enum: ["pending", "connected", "rejected"],
        default: "pending",
      },
      matchedAt: { type: Date, default: Date.now },
    },
  ],
});

// Indexes
userSchema.index({ email: 1 }, { unique: true });
userSchema.index({ industries: 1 });
userSchema.index({ events: 1 });
userSchema.index({ location: 1 });
userSchema.index({ skills: 1 });
userSchema.index({ techStack: 1 });
userSchema.index({ location: 1, industries: 1, role: 1 });

// Password hashing middleware
userSchema.pre("save", async function (next) {
  try {
    if (this.isModified("password")) {
      const bcrypt = require("bcrypt");
      this.password = await bcrypt.hash(this.password, 10);
    }
    next();
  } catch (error) {
    next(error);
  }
});

const User = mongoose.model("User", userSchema);
module.exports = User;
