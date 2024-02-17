const userRouter = require("express").Router();
const mongoose = require("mongoose");
const Users = require("../models/userModel");
userRouter.get("/login", (req, res) => {
  res.status(200).json({
    status: "this is login page",
  });
});
userRouter.get("/register", (req, res) => {
  res.status(200).json({
    status: "this is register page",
  });
});

module.exports = userRouter;
