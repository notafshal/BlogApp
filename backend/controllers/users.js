const userRouter = require("express").Router();
const mongoose = require("mongoose");
const Users = require("../models/userModel");
userRouter.post("/login", (req, res) => {
  res.status(200).json({
    status: "this is login page",
  });
});
userRouter.post("/register", (req, res) => {
  res.status(200).json({
    status: "this is register page",
  });
});

module.exports = userRouter;
