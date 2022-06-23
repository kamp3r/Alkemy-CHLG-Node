const { Sequelize } = require('sequelize');
const { config } = require('../config/config');
const setUpModel = require('../db/models');

const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);
const URI = `postgres://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`

const sequelize = new Sequelize (URI, {
    dialect: 'postgres',
    logging: console.log,
    dialectOptions: {
        useUTC: true
    },
    timezone: '-03:00',
})

setUpModel(sequelize);

module.exports = sequelize;