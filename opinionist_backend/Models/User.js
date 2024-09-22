const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: "Name is required",
  },
  email: {
    type: String,
    required: "Enter your email",
  },
  feedbackFile: {
    type: String,
    required: "File is required!",
  },
});

module.exports = mongoose.model("UserModel", userSchema);
