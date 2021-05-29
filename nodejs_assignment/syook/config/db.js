const mongoose = require('mongoose');
const asyncHandler = require('../middleware/async.js');
const logger = require('../utils/logger');

const connectDB = asyncHandler(async () => {
  const conn = await mongoose.connect(process.env.MONGO_URI, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    autoIndex: true,
    poolSize: 10, // Maintain up to 10 socket connections
    bufferMaxEntries: 0,
    connectTimeoutMS: 10000, // Give up initial connection after 10 seconds
    socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
  });
  logger.info(
    `MongoDB Connected at - ${conn.connection.host}`.cyan.underline.bold
  );
});

module.exports = connectDB;
