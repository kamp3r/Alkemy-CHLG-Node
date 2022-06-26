const moviesRouter = require('express').Router();
const validationData = require('../middlewares/validator.middleware');
const {
  getMovieSchema,
  createMovieSchema,
  updateMovieSchema,
  addCharacterSchema,
} = require('../schemas/movie.schema');
const {
  getMovies,
  getMovieById,
  createMovie,
  addCharacter,
  updateMovie,
  deleteMovie,
} = require('../controllers/movies.controller');
const passport = require('passport');
const checkRole = require('../middlewares/auth.middleware')

moviesRouter.get('/', getMovies);

moviesRouter.get(
  '/:id',
  validationData(getMovieSchema, 'params'),
  getMovieById
);

moviesRouter.post('/',  passport.authenticate('jwt', { session: false }),
checkRole('admin'), validationData(createMovieSchema, 'body'), createMovie);

moviesRouter.post(
  '/addCharacter',  passport.authenticate('jwt', { session: false }),
  checkRole('admin'),
  validationData(addCharacterSchema, 'body'),
  addCharacter
);

moviesRouter.patch(
  '/:id',
  passport.authenticate('jwt', { session: false }),
  checkRole('admin'),
  validationData(getMovieSchema, 'params'),
  validationData(updateMovieSchema, 'body'),
  updateMovie
);

moviesRouter.delete(
  '/:id',
  validationData(getMovieSchema, 'params'),
  deleteMovie
);

module.exports = moviesRouter;
