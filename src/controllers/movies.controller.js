const MovieService = require('../services/movie.service');
const service = new MovieService();

const getMovies = async (req, res, next) => {
  try {
    const Movies = await service.find(req.query);
    res.json(Movies);
  } catch (err) {
    next(err);
  }
};

const getMovieById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const movie = await service.findById(id);
    res.json(movie);
  } catch (err) {
    next(err);
  }
};

const createMovie = async (req, res, next) => {
  try {
    const data = req.body;
    const movie = await service.create(data);
    res.status(201).json(movie);
  } catch (err) {
    next(err);
  }
};

const addCharacter = async (req, res, next) => {
  try {
    const data = req.body;
    const newMovie = await service.addCharacter(data);
    res.status(201).json(newMovie);
  } catch (err) {
    next(err);
  }
};

const updateMovie = async (req, res, next) => {
  try {
    const { id } = req.params;
    const data = req.body;
    const movie = await service.update(id, data);
    res.json(movie);
  } catch (err) {
    next(err);
  }
};

const deleteMovie = async (req, res, next) => {
  try {
    const { id } = req.params;
    const movie = await service.delete(id);
    res.json(movie);
  } catch (err) {
    next(err);
  }
};

module.exports = { getMovies, getMovieById, createMovie, addCharacter, updateMovie, deleteMovie };