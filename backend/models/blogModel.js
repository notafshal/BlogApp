const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "please provide blog title"],
  },
  content: {
    type: String,
    required: [true, "please provide blog content"],
  },
  url: {
    type: String,
  },
  likes: {
    type: Number,
  },
});
const Blog = mongoose.model("Blog", blogSchema);
