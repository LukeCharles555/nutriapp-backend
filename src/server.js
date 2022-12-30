const express = require('express');
const pino = require('pino');
const http = require('http');
const mongoose = require('mongoose');

// TODO: When DB is up uncomment this
const db = require('./config/keys').mongoURI;
console.log(db);

// Utils
const initialiseServer = require('./utils/initialiseServer');

// Consts
const { PORT } = require('./consts/project');
console.log(PORT);
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

const credentials = {};

module.exports = http.createServer(credentials, server).listen(PORT, () => {
  logger.info('HTTP server start on port %d', PORT);
  logger.info('Press Ctrl + C to quit');
});
