const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: [true, "Please provide your full name"],
  },
  email: {
    type: String,
    required: [true, "Please provide your email"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Please provide your Password"],
  },
  blog: [
    {
      ref: "Blog",
      type: mongoose.Schema.Types.ObjectId,
    },
  ],
});

const userModel = mongoose.model("Users", userSchema);
module.exports = userModel;
