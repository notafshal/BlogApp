const userRouter = require("express").Router();
const mongoose = require("mongoose");
const Users = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

userRouter.post("/login", async (req, res) => {
  //Authenticate User
  const { email, password } = req.body;
  try {
    if (!email) throw "email is missing!";
    if (!password) throw "password is missing";
  } catch (e) {
    res.status(400).json({
      status: "failed",
      message: e,
    });
    return;
  }

  try {
    const user = await Users.findOne({ email: email });
    if (user) {
      const samePassword = await bcrypt.compare(password, user.password);

      if (samePassword) {
        const userToken = {
          email: user.email,
          id: user._id,
        };
        const finalToken = await jwt.sign(userToken, process.env.SECRET_KEY);
        return res.status(200).json({
          email: user.email,
          token: finalToken,
        });
      }
    }
  } catch (e) {
    res.status(400).json({
      status: "failed",
      message: e,
    });
    return;
  }

  res.status(400).json({
    status: "fail",
    message: "email or password incorrect",
  });
});
userRouter.post("/register", async (req, res) => {
  const { fullName, email, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  if (fullName === undefined || email === undefined || password === undefined) {
    return res.status(400).json({ message: "missing credentials" });
  }
  if (email === Users.findOne(email)) console.log(req.body);
  try {
    await Users.create({
      fullName: fullName,
      email: email,
      password: hashedPassword,
    });
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
