const GenreService = require('../services/genre.service');
const service = new GenreService();

const getGenres = async (req, res, next) => {
  try {
    const genres = await service.find();
    res.json(genres);
  } catch (err) {
    next(err);
  }
};

const getGenreById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const genre = await service.findById(id);
    res.json(genre);
  } catch (err) {
    next(err);
  }
};

const createGenre = async (req, res, next) => {
  try {
    const data = req.body;
    const genre = await service.create(data);
    res.status(201).json(genre);
  } catch (err) {
    next(err);
  }
};

const updateGenre = async (req, res, next) => {
  try {
    const { id } = req.params;
    const data = req.body;
    const genre = await service.update(id, data);
    res.json(genre);
  } catch (err) {
    next(err);
  }
};

const deleteGenre = async (req, res, next) => {
  try {
    const { id } = req.params;
    const genre = await service.delete(id);
    res.json(genre);
  } catch (err) {
    next(err);
  }
};

module.exports = { getGenres, getGenreById, createGenre, updateGenre, deleteGenre };