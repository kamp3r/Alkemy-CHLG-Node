const userRouter = require('express').Router();
const validationData = require('../middlewares/validator.middleware');
const { updateUserSchemaFromAdmin, getUserSchema } = require('../schemas/user.schema');
const {
  getUsers,
  getUserById,
  updateUser,
  deleteUser,
} = require('../controllers/user.controller');
const passport = require('passport');
const checkRole = require('../middlewares/auth.middleware');

userRouter.get(
  '/',
  passport.authenticate('jwt', { session: false }),
  checkRole('admin'),
  getUsers
);

userRouter.get(
  '/:id',
  passport.authenticate('jwt', { session: false }),
  checkRole('admin'),
  validationData(getUserSchema, 'params'),
  getUserById
);

userRouter.patch(
  '/:id',
  passport.authenticate('jwt', { session: false }),
  checkRole('admin'),
  validationData(getUserSchema, 'params'),
  validationData(updateUserSchemaFromAdmin, 'body'),
  updateUser
);

userRouter.delete(
  '/:id',
  passport.authenticate('jwt', { session: false }),
  checkRole('admin'),
  validationData(getUserSchema, 'params'),
  deleteUser
);

module.exports = userRouter;
