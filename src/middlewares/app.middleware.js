const express = require('express');
const routerAPI = require('../routes/index.routes');
const {
  errorHandler,
  boomErrorHandler,
  logErrors,
} = require('./error.handler');

const appMiddleware = (app) => {
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());
  require('../auth');
  routerAPI(app);
  app.use(logErrors);
  app.use(boomErrorHandler);
  app.use(errorHandler);
};

module.exports = appMiddleware;
