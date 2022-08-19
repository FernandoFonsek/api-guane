const globalErrorHandler = (err, req, res, next) => {
  console.log("desde error controller", err.statusCode);
  const statusCode = err.statusCode || 500;
  res.status(statusCode).json({
    status: err.status,
    message: err.message,
    stack: err.stack,
  });
};

module.exports = { globalErrorHandler };
