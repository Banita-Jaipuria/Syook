const ErrorResponse = require('../utils/errorResponse.js');
const logger = require('../utils/logger');

const notFound = (req, res, next) => {
  const error = new ErrorResponse(`Not Found ${req.originalUrl}`, 404);
  next(error);
};

const errorHandler = (err, req, res, next) => {
  let error = { ...err };

  error.message = err.message;

  if (process.env.NODE_ENV === 'development') logger.error(`${err.stack}`.red);

  //   Mongoose Bad object ID
  if (err.name === 'CastError') {
    const message = `Resource not found  ${err.value}`;
    error = new ErrorResponse(message, 404);
  }

  //   mongoose duplicate key error
  if (err.code === 11000) {
    const message = 'Duplicate field Value Entered';
    error = new ErrorResponse(message, 400);
  }

  //   Mongoose ValidationError
  if (err.name === 'ValidationError') {
    const message = Object.values(err.errors).map((el) => el.message);
    error = new ErrorResponse(message, 400);
  }

  return res.status(error.statusCode || 500).json({
    success: false,
    code: error.statusCode || 500,
    message: error.message || 'Server Error',
    stack: process.env.NODE_ENV === 'production' ? undefined : err.stack,
  });
};

module.exports = { notFound, errorHandler };
