const express = require('express');
const {config} = require('./src/config/config')
const appMiddleware = require('./src/middlewares/app.middleware');
const app = express();

appMiddleware(app);

app.listen(config.port, () =>
  console.log(`Server running in port ${config.port}`)
);
