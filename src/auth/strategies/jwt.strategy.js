const { Strategy, ExtractJwt } = require('passport-jwt');
const boom = require('@hapi/boom');
const bcrypt = require('bcrypt');
const UserService = require('../../services/user.service');
const { config } = require('../../config/config');
const service = new UserService();

const options = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: config.jwtKey,
}

const JwtStrategy = new Strategy(options, (payload, done) => {
    return done(null, payload);
})

module.exports = JwtStrategy