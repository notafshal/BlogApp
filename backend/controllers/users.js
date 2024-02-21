const userRouter = require("express").Router();
const mongoose = require("mongoose");
const Users = require("../models/userModel");
const bcrypt = require("bcrypt");
userRouter.post("/login", (req, res) => {
  res.status(200).json({
    status: "this is login page",
  });
});
userRouter.post("/register", async (req, res) => {
  const { fullName, email, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  try {
  } catch (e) {}
  try {
    if (!fullName) throw "Name is missing!!";
    if (!email) throw "Email is missing!!";
    if (!password) throw "Password is missing!!";
  } catch (e) {
    res.send.json({
      status: "failed",
      message: e,
    });
    return;
  }

  try {
    await Users.create({
      fullName: fullName,
      email: email,
      password: hashedPassword,
    });
    console.log(fullName, email, hashedPassword);
    res.redirect("/login");
  } catch (e) {
    res.status(400).json({
      status: "failed",
      message: e.message,
    });
    return;
  }

  res.status(200).json({
    status: "success",
  });
});

module.exports = userRouter;
