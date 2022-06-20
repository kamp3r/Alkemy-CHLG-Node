const Joi = require('joi');

const id = Joi.number().integer();
const name = Joi.string().min(2).max(50);
const age = Joi.number().integer();
const weight = Joi.number().integer();
const history = Joi.string().min(2).max(500);
const image = Joi.string().min(2).max(500);
const movieId = Joi.number().integer();
const characterId = Joi.number().integer();

const getCharacterSchema = Joi.object({
  id: id.required(),
});

const createCharacterSchema = Joi.object({
  name: name.required(),
  age: age.required(),
  weight: weight.required(),
  history: history.required(),
  image: image.required(),
});

const updateCharacterSchema = Joi.object({
    name: name,
    age: age,
    weight: weight,
    history: history,
    image: image,
})

const addMovieSchema = Joi.object({
  characterId: characterId.required(),
  movieId: movieId.required(),
});


module.exports = { getCharacterSchema, createCharacterSchema, updateCharacterSchema, addMovieSchema };