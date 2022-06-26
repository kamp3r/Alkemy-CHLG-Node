const genresRouter = require('express').Router();
const validationData = require('../middlewares/validator.middleware');
const {
  getGenreSchema,
  createGenreSchema,
  updateGenreSchema,
} = require('../schemas/genre.schema');
const {
  getGenres,
  getGenreById,
  createGenre,
  updateGenre,
  deleteGenre,
} = require('../controllers/genre.controller');
const passport = require('passport');
const checkRole = require('../middlewares/auth.middleware')

genresRouter.get('/', getGenres);

genresRouter.get(
  '/:id',
  validationData(getGenreSchema, 'params'),
  getGenreById
);

genresRouter.post('/',   passport.authenticate('jwt', { session: false }),
checkRole('admin'), validationData(createGenreSchema, 'body'), createGenre);

genresRouter.patch(
  '/:id',
  validationData(getGenreSchema, 'params'),
  validationData(updateGenreSchema, 'body'),
  updateGenre
);

genresRouter.delete(
  '/:id',
  validationData(getGenreSchema, 'params'),
  deleteGenre
);

module.exports = genresRouter;
