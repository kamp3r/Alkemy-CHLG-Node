const Joi = require('joi');

const id = Joi.number().integer();
const title = Joi.string().min(4).max(100);
const creationDate = Joi.date();
const rating = Joi.number().integer().min(1).max(5);
const image = Joi.string().min(2).max(500);
const characterId = Joi.number().integer();


const getMovieSchema = Joi.object({
  id: id.required(),
});

const createMovieSchema = Joi.object({
  title: title.required(),
  creationDate: creationDate.required(),
  rating: rating.required(),
  image: image.required(),
});

const updateMovieSchema = Joi.object({
    title: title,
    creationDate: creationDate,
    rating: rating,
    image: image,
})

const addCharacterSchema = Joi.object({
    characterId: characterId.required(),
});


module.exports = { getMovieSchema, createMovieSchema, updateMovieSchema, addCharacterSchema };