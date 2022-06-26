const authService = require('../services/auth.service');
const service = new authService();

const loginAuth = async (req, res, next) => {
  try {
    const user = req.user;
    const sign = await service.signToken(user);
    res.status(200).json(sign);
  } catch (error) {
    next(error);
  }
};

const createUser = async (req, res, next) => {
  try {
    const data = req.body;
    const users = await service.createUser(data);
    res.status(201).json(users);
  } catch (err) {
    next(err);
  }
};

const updateUser = async (req, res, next) => {
  try {
    const user = req.user;
    const data = req.body;
    const users = await service.updateByEmail(user.id, data);
    res.status(200).json(users);
  } catch (err) {
    next(err);
  }
};

module.exports = {loginAuth, createUser, updateUser};
