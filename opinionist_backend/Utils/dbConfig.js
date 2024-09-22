const mongoose = require("mongoose");

const dbConfig = async () => {
  try {
    const isConnected = await mongoose.connect(process.env.MONGODB_URL);
    console.log("Db Connected!");
  } catch (err) {
    console.log(err);
  }
};

module.exports = dbConfig;
