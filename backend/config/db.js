require("dotenv").config();
const mongoose = require("mongoose");

const connectDb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI,{
      useNewUrlParser:true,
      useUnifiedTopology:true
    });
console.log("mongodb connection success");


  } catch (error) {
    console.error('mongoDb connection is failed--', error);
    process.exit(1);
  }
};
module.exports = connectDb;