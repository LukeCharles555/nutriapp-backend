const express = require('express');
const pino = require('pino');
const http = require('http');
const mongoose = require('mongoose');

// TODO: When DB is up uncomment this
// const db = require('./config/keys').mongoURI;

const initialiseServer = require('./utils/initialiseServer');

const app = express();
const server = initialiseServer(app);

const logger = pino({
  level: process.env.LOG_LEVEL || 'info',
  prettyPrint: {
    ignore: 'pid,hostname',
  },
});

// @ts-ignore
app.logger = logger;

mongoose
  // @ts-ignore
  .connect(db, { useNewUrlParser: true })
  .then(() =>
    logger.info('MongoDB database connection established successfully'),
  )
  .catch((error) => logger.error(error));

const port = 4000;
const credentials = {};

module.exports = http.createServer(credentials, server).listen(port, () => {
  logger.info('HTTP server start on port %d', port);
  logger.info('Press Ctrl + C to quit');
});
