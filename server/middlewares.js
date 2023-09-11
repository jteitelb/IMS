const notFound = (req, res, next) => {
  const error = new Error(`Not found - ${req.originalUrl}`);
  res.status(404);
  next(error);
};

const errorHandler = (error, req, res, next) => {
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  res.status(statusCode);
  console.log(process.env.NODE_ENV);
  res.json({
    message: error.message,
    stack: process.env.NODE_ENV === "dev" ? error.stack : "production mode",
  });
};

module.exports = { notFound, errorHandler };
