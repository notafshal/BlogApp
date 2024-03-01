const logger = require("./logger");
const jwt = require("jsonwebtoken");

const requestLogger = (req, res, next) => {
  logger.info("Method:", req.method);
  logger.info("Path:", req.path);
  logger.info("Body:", req.body);

  next();
};
const errorHandler = (error, req, res, next) => {
  logger.error("error is" + error.name);
  if (error.name === "JsonWebTokenError") {
    res.status(400).send({
      message: "invalid signature",
    });
  }
  if (error) {
    res.status(400).json({
      status: "failed",

      error: error,
    });
  } else {
    next();
  }
};
const auth = (req, res, next) => {
  try {
    const accessToken = req.headers.authorization.replace("Bearer ", "");
    const verification = jwt.verify(accessToken, process.env.SECRET_KEY);
    req.user = verification;
    logger.info(verification);
  } catch (e) {
    res.status(401).json({
      message: "Unauthorized",
    });
  }

  next();
};

module.exports = { auth, errorHandler, requestLogger };
