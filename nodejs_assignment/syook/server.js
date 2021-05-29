const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const colors = require('colors');
require('dotenv').config();

const logger = require('./utils/logger');
const connectDB = require('./config/db');
const routeLoader = require('./middleware/router');
const { notFound, errorHandler } = require('./middleware/error');

// initialize the express App
const app = express();

// ConnectDB
connectDB();

// parse json request body
app.use(express.json());

// Request Logging Middleware
process.env.NODE_ENV === 'development' && app.use(morgan('dev'));

// enable cors
app.use(cors());

routeLoader(app);

// Middleware
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  logger.info(
    `Server Started on ${process.env.NODE_ENV} in Port ${process.env.PORT}`
      .yellow.bold
  );
});

module.exports = app;
