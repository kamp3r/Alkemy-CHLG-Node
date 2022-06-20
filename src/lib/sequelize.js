const { Sequelize } = require('sequelize');
const { config } = require('../config/config');
const setUpModel = require('../db/models');

const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);
const URI = `postgres://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`

const sequelize = new Sequelize (URI, {
    dialect: 'postgres',
    logging: console.log
})

setUpModel(sequelize);

module.exports = sequelize;