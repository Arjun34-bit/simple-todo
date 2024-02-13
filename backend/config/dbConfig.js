const mongoose = require("mongoose");
const colors = require("colors");

const connectDB = async () => {
  try {
    const connect = await mongoose.connect(process.env.MONGO_URL);
    console.log(`MongoDB Database Connected`.blue.bold);
  } catch (error) {
    console.log(`Error ${error.message}`.red.bold);
    process.exit();
  }
};

module.exports = connectDB;
