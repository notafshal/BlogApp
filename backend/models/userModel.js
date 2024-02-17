const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please provide your Name"],
  },
  email: {
    type: String,
    required: [true, "Please provide your Name"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Please provide your Password"],
  },
});

const userModel = mongoose.model("Users", userSchema);
module.exports = userModel;
