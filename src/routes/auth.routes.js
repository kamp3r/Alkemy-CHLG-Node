const authRouter = require('express').Router();
const passport = require('passport');
const validationData = require('../middlewares/validator.middleware');
const {
  loginAuth,
  createUser,
  updateUser,
} = require('../controllers/auth.controller');
const {
  createUserSchema,
  updateUserSchema,
} = require('../schemas/user.schema');

authRouter.post(
  '/register',
  validationData(createUserSchema, 'body'),
  createUser
);

authRouter.post(
  '/login',
  passport.authenticate('local', { session: false }),
  loginAuth
);

authRouter.put(
  '/updateAccount',
  passport.authenticate('jwt', { session: false }),
  validationData(updateUserSchema, 'body'),
  updateUser
);

module.exports = authRouter;
