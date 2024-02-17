const express = require("express");
const app = express();
const userRouter = require("./controllers/users");
const { errorHandler } = require("./utils/middleware");
const { default: mongoose } = require("mongoose");
const config = require("./utils/config");

mongoose
  .connect(config.MONGO_URI, {})
  .then(() => {
    console.log("connected to database");
  })
  .catch(() => {
    console.log("No DB connection");
  });
app.use(express.json());
app.use(errorHandler);

app.use("/api/users", userRouter);
module.exports = app;
