// backend/server.js
const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const connectDB = require("./config/MongoDBConnection");

// Load environment variables
dotenv.config();

// Connect to Mongodb
connectDB();

const app = express();
const PORT = process.env.PORT;

// Middleware
app.use(express.json());

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
