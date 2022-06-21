const Joi = require("joi");

const id = Joi.number().integer();
const name = Joi.string().min(2).max(50);
const image = Joi.string().min(2).max(500);

const getGenreSchema = Joi.object({
  id: id.required(),
});

const createGenreSchema = Joi.object({
  name: name.required(),
  image: image.required(),
});

const updateGenreSchema = Joi.object({
  name: name,
  image: image,
});

module.exports = {
  getGenreSchema,
  createGenreSchema,
  updateGenreSchema,
};
