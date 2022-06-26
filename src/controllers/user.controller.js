const UserService = require('../services/user.service');
const service = new UserService();

const getUsers = async (req, res, next) => {
  try {
    const users = await service.find();
    res.json(users);
  } catch (err) {
    next(err);
  }
};

const getUserById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const users = await service.findById(id);
    res.json(users);
  } catch (err) {
    next(err);
  }
};

const updateUser = async (req, res, next) => {
  try {
    const { id } = req.params;
    const data = req.body;
    const users = await service.update(id, data);
    res.json(users);
  } catch (err) {
    next(err);
  }
};

const deleteUser =   async (req, res, next) => {
    try {
      const { id } = req.params;
      const users = await service.delete(id);
      res.json(users);
    } catch (err) {
      next(err);
    }
  }

module.exports = { getUsers, getUserById, updateUser, deleteUser };
