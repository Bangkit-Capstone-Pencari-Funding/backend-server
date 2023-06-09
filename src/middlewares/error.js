const config = require('../config')
const logger = require('../config/logger')
const httpStatus = require('http-status')
const {ApiError} = require('../errors')
// const prisma = require('../utils/prisma')
const { Prisma } = require('@prisma/client')

const errorConverter = (err, req, res, next) => {
  let error = err;
  if(error instanceof Prisma.PrismaClientKnownRequestError) {
    const message = httpStatus[400]
    error = new ApiError(httpStatus.BAD_REQUEST, message)
  }
  else if (!(error instanceof ApiError)) {
    const statusCode =
      error.statusCode || httpStatus.INTERNAL_SERVER_ERROR;
    const message = error.message || httpStatus[statusCode];
    error = new ApiError(statusCode, message, false, err.stack);
  }

  next(error);
};

const errorHandler = (err, req, res, next) => {
  let { statusCode, message } = err;
  if (config.env === 'production' && !err.isOperational) {
    statusCode = httpStatus.INTERNAL_SERVER_ERROR;
    message = httpStatus[httpStatus.INTERNAL_SERVER_ERROR];
  }

  res.locals.errorMessage = err.message;

  const response = {
    code: statusCode,
    message,
    ...(config.env === 'development' && { stack: err.stack }),
  };

  if (config.env === 'development') {
    logger.error(err);
  }

  res.status(statusCode).send(response);
};

module.exports = {
    errorConverter, 
    errorHandler
}