const express = require("express");
const app = express();
const userRouter = require("./controllers/users");
const { errorHandler, requestLogger, auth } = require("./utils/middleware");
const mongoose = require("mongoose");
const config = require("./utils/config");
const cors = require("cors");
const blogRouter = require("./controllers/blogs");

mongoose
  .connect(config.MONGO_URI)
  .then(() => {
    console.log("connected to database");
  })
  .catch((e) => {
    console.log("No DB connection");
  });

app.use(express.json());
app.use(cors());
app.use(errorHandler);

app.use(requestLogger);
app.use(auth);
app.get("/", (req, res) => {
  res.status(200).json({
    status: "Welcome",
  });
});
app.use("/api/users", userRouter);
app.use("/api/blogs", blogRouter);

module.exports = app;
