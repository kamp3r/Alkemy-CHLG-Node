const moviesRouter = require('express').Router();

const MovieService = require('../services/movie.service');
const validationData = require('../middlewares/validator.middleware');
const {
  getMovieSchema,
  createMovieSchema,
  updateMovieSchema,
  addCharacterSchema,
} = require('../schemas/movie.schema');
const service = new MovieService();

moviesRouter.get('/', async (req, res, next) => {
  try {
    const Movies = await service.find(req.query);
    res.json(Movies);
  } catch (err) {
    next(err);
  }
});

moviesRouter.get(
  '/:id',
  validationData(getMovieSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const movie = await service.findById(id);
      res.json(movie);
    } catch (err) {
      next(err);
    }
  }
);

moviesRouter.post(
  '/',
  validationData(createMovieSchema, 'body'),
  async (req, res, next) => {
    try {
      const data = req.body;
      const movie = await service.create(data);
      res.status(201).json(movie);
    } catch (err) {
      next(err);
    }
  }
);

moviesRouter.post(
    '/addCharacter',
    validationData(addCharacterSchema, 'body'),
    async (req, res, next) => {
      try {
        const data = req.body;
        const newMovie = await service.addMovie(data);
        res.status(201).json(newMovie);
      } catch (err) {
        next(err);
      }
    }
  );

moviesRouter.patch(
  '/id',
  validationData(getMovieSchema, 'params'),
  validationData(updateMovieSchema, 'body'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const data = req.body;
      const movie = await service.update(id, data);
      res.json(movie);
    } catch (err) {
      next(err);
    }
  }
);

moviesRouter.delete(
  '/:id',
  validationData(getMovieSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const movie = await service.delete(id);
      res.json(movie);
    } catch (err) {
      next(err);
    }
  }
);

module.exports = moviesRouter