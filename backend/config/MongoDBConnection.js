const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB Connected Successfully");
  } catch (error) {
    console.error("Error Connecting to MongoDB:", error.message);
    process.exit(1);
  }
};

module.exports = connectDB; //export the function to use it in other files
