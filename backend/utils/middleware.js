const logger = require("./logger");
const requestLogger = (req, res, next) => {
  logger.info("Method:", req.method);
  logger.info("Path:", req.path);
  logger.info("Body:", req.body);

  next();
};
const errorHandler = (error, req, res, next) => {
  if (error) {
    res.status(400).json({
      status: "failed",
      error: e,
    });
  } else {
    next();
  }
};

module.exports = { errorHandler, requestLogger };
