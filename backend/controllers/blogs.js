const blogRouter = require("express").Router();
const mongoose = require("mongoose");
const Blog = require("../models/blogModel");

blogRouter.post("/", async (req, res) => {
  const { title, author, url, likes } = req.body;
  try {
    if (!title) throw "title of the blog is missing";
    if (!author) throw "title of the blog is missing";
  } catch (e) {
    res.status(400).json({
      status: "failed",
      message: e,
    });
  }
  try {
    const blog = new Blog(req.body);
    console.log(blog);
  } catch (e) {}
});

blogRouter.get("/", (req, res) => {
  Blog.find({}).then((blogs) => {
    res.json(blogs);
  });
});

module.exports = blogRouter;
