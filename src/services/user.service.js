const boom = require('@hapi/boom');
const { models } = require('../lib/sequelize');
const sendMail = require('../mail/send.email');
const bcrypt = require('bcrypt');

class UserService {
  async create(data) {
    try {
      const hashPassword = await bcrypt.hash(data.password, 10);
      const newUser = await models.User.create({
        ...data,
        password: hashPassword,
      });
      await sendMail(newUser.email);
      delete newUser.dataValues.password;
      return newUser;
    } catch (error) {
      throw boom.conflict(error);
    }
  }
  async find() {
    const users = await models.User.findAll({
      attributes: {
        exclude: ['password'],
      },
    });
    return users;
  }
  async findById(id) {
    const user = await models.User.findByPk(id, {
      attributes: {
        exclude: ['password'],
      },
    });
    if (!user) {
      throw boom.notFound('User not found');
    }
    return user;
  }

  async findByEmail(email) {
    const rta = await models.User.findOne({
      where: {
        email,
      },
    });
    return rta;
  }
  async update(id, data) {
    const toUpdate = await this.findById(id);
    const finalData = await toUpdate.update(data);
    return finalData;
  }
  async delete(id) {
    const toDelete = await this.findById(id);
    const deleted = await toDelete.destroy();
    return deleted;
  }
}

module.exports = UserService;
