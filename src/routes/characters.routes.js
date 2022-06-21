const CharacterService = require('../services/character.service');
const validationData = require('../middlewares/validator.middleware');
const {
  getCharacterSchema,
  createCharacterSchema,
  updateCharacterSchema,
  addMovieSchema,
} = require('../schemas/character.schema');

const characterRouter = require('express').Router();
const service = new CharacterService();

characterRouter.get('/', async (req, res, next) => {
  try {
    const characters = await service.find(req.query);
    res.json(characters);
  } catch (err) {
    next(err);
  }
});

characterRouter.get('/:id',
  validationData(getCharacterSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const character = await service.findById(id);
      res.json(character);
    } catch (err) {
      next(err);
    }
  }
);

characterRouter.post(
  '/',
  validationData(createCharacterSchema, 'body'),
  async (req, res, next) => {
    try {
      const data = req.body;
      const character = await service.create(data);
      res.status(201).json(character);
    } catch (err) {
      next(err);
    }
  }
);

characterRouter.post(
    '/addMovie',
    validationData(addMovieSchema, 'body'),
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

characterRouter.patch(
  '/id',
  validationData(getCharacterSchema, 'params'),
  validationData(updateCharacterSchema, 'body'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const data = req.body;
      const character = await service.update(id, data);
      res.json(character);
    } catch (err) {
      next(err);
    }
  }
);

characterRouter.delete(
  '/:id',
  validationData(getCharacterSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const character = await service.delete(id);
      res.json(character);
    } catch (err) {
      next(err);
    }
  }
);

module.exports = characterRouter;
