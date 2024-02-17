const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "please provide blog title"],
  },
  author: {
    type: String,
    required: [true, "please provide blog author"],
  },
  url: {
    type: String,
    required: [true, "please provide blog url"],
  },
  likes: {
    type: Number,
  },
});
const Blog = mongoose.model("Blog", blogSchema);
