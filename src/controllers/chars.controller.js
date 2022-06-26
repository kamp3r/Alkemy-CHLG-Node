const CharacterService = require('../services/character.service');
const service = new CharacterService();

const getCharacters = async (req, res, next) => {
  try {
    const characters = await service.find(req.query);
    res.json(characters);
  } catch (err) {
    next(err);
  }
};

const getCharacterById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const character = await service.findById(id);
    res.json(character);
  } catch (error) {
    next(error);
  }
};

const createCharacter = async (req, res, next) => {
  try {
    const data = req.body;
    const character = await service.create(data);
    res.status(201).json(character);
  } catch (err) {
    next(err);
  }
};

const addMovie = async (req, res, next) => {
  try {
    const data = req.body;
    const newMovie = await service.addMovie(data);
    res.status(201).json({message: 'The character was added to the movie'});
  } catch (err) {
    next(err);
  }
};

const updateCharacter = async (req, res, next) => {
  try {
    const { id } = req.params;
    const data = req.body;
    const character = await service.update(id, data);
    res.json(character);
  } catch (err) {
    next(err);
  }
};

const deleteCharacter = async (req, res, next) => {
  try {
    const { id } = req.params;
    const character = await service.delete(id);
    res.json(character);
  } catch (err) {
    next(err);
  }
};

module.exports = { getCharacters, getCharacterById, createCharacter, addMovie, updateCharacter, deleteCharacter };