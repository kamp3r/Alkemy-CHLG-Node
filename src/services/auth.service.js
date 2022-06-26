const boom = require('@hapi/boom');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { config } = require('../config/config');
const UserService = require('./user.service');

const service = new UserService();

class authService {
  async createUser(data) {
    try {
      const newUser = await service.create(data)
      return newUser;
    } catch (error) {
      throw boom.conflict(error);
    }
  }

  async getUser(email, password) {
    const user = await service.findByEmail(email);
    if (!user) {
      throw boom.notFound('User not found');
    }
    const isValid = await bcrypt.compare(password, user.password);
    if (!isValid) {
      boom.conflict('Invalid password');
    }
    delete user.dataValues.password;
    return user;
  }
  async updateByEmail(id, data) {
    const user = await service.findById(id);
    if (!user) {
      throw boom.notFound('User not found');
    }
    const hashPassword = await bcrypt.hash(data.password, 10)
    const updatedUser = await service.update(user.id, {...data, password: hashPassword});
    updatedUser.dataValues.password = 'Changed!';
    return updatedUser;
  }
  async signToken(user) {
    const payload = {
      id: user.id,
      role: user.role,
    };
    const token = jwt.sign(payload, config.jwtKey);
    return {user, token}
    }
}

module.exports = authService;
