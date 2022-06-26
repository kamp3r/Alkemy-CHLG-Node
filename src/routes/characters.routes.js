const characterRouter = require('express').Router();
const validationData = require('../middlewares/validator.middleware');
const {
  getCharacterSchema,
  createCharacterSchema,
  updateCharacterSchema,
  addMovieSchema,
} = require('../schemas/character.schema');
const {
  getCharacters,
  getCharacterById,
  createCharacter,
  addMovie,
  updateCharacter,
  deleteCharacter,
} = require('../controllers/chars.controller');

const passport = require('passport');
const checkRole = require('../middlewares/auth.middleware');

characterRouter.get('/', getCharacters);

characterRouter.get(
  '/:id',
  validationData(getCharacterSchema, 'params'),
  getCharacterById
);

characterRouter.post(
  '/',
  passport.authenticate('jwt', { session: false }),
  checkRole('admin'),
  validationData(createCharacterSchema, 'body'),
  createCharacter
);

characterRouter.post(
  '/addMovie',
  passport.authenticate('jwt', { session: false }),
  checkRole('admin'),
  validationData(addMovieSchema, 'body'),
  addMovie
);

characterRouter.patch(
  '/id',
  passport.authenticate('jwt', { session: false }),
  checkRole('admin'),
  validationData(getCharacterSchema, 'params'),
  validationData(updateCharacterSchema, 'body'),
  updateCharacter
);

characterRouter.delete(
  '/:id',
  passport.authenticate('jwt', { session: false }),
  checkRole('admin'),
  validationData(getCharacterSchema, 'params'),
  deleteCharacter
);

module.exports = characterRouter;
