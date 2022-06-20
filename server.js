const express = require('express');

const app = express();

const { config } = require('./src/config/config');
const appMiddleware = require('./src/middlewares/app.middleware');

appMiddleware(app);

app.listen(config.port, () =>
  console.log(`Server running in port ${config.port}`)
);
