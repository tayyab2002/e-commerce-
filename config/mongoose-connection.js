const mongoose = require("mongoose");
const config = require("config");

const connectDB = async () => {
  try {
    mongoose.connect(`${config.get("MONGODB_URL")}/scatch`);
    console.log("DB Connected");
  } catch (error) {
    console.log("DB Connection Faild!", error);
  }
};

module.exports = connectDB;
