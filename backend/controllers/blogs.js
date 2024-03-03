const blogRouter = require("express").Router();
const mongoose = require("mongoose");
require("../models/blogModel");
const jwt = require("jsonwebtoken");
const { auth } = require("../utils/middleware");
const express = require("express");
const app = express();

blogRouter.get("/", async (req, res) => {
  const Blog = mongoose.model("Blog");
  const blogData = await Blog.find({});
  res.status(200).json({
    data: blogData,
  });
});
app.use(auth);
blogRouter.post("/", async (req, res) => {
  const Blog = mongoose.model("Blog");
  const { title, content, likes } = req.body;
  try {
    if (!title) throw "Title is missing";
    if (!content) throw "Content is missing";
  } catch (e) {
    res.status(400).json({
      status: "failed",
      message: e,
    });
    return;
  }
  try {
    await Blog.create({
      title: title,
      content: content,
      likes: likes,
    });
  } catch (e) {
    res.send(400).json({
      status: "failed",
      message: e.message,
    });
  }
  res.status(200).json({
    status: "success",
    message: "Blog Uploaded",
  });
  return;
});

blogRouter.delete("/:id", async (req, res) => {
  const Blog = mongoose.model("Blog");
  console.log(req.params);
  const id = req.params.id;
  const fetchBlog = Blog.findOne({
    _id: id,
  });
  try {
    if (!fetchBlog) throw "Blog ID is necessary";
  } catch (e) {
    res.status(400).json({
      message: e,
    });
    return;
  }

  try {
    await Blog.deleteOne({
      _id: id,
    });
  } catch (e) {
    res.status(400).json({
      status: "failed",
      message: e,
    });
    return;
  }
  res.status(200).json({
    message: "Movie deleted successfully",
  });
});

module.exports = blogRouter;
