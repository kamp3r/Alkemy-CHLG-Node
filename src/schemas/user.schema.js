const Joi = require('joi');

const id = Joi.number().integer();
const email = Joi.string().email();
const password = Joi.string().min(6).max(100);
const role = Joi.string().valid('admin', 'user');
const creationDate = Joi.date();


const getUserSchema = Joi.object({
    id: id.required(),
})

const createUserSchema = Joi.object({
    email: email.required(),
    password: password.required(),
    role,
    creationDate
})

const updateUserSchemaFromAdmin = Joi.object({
    email,
    password,
    role,
})

const updateUserSchema = Joi.object({
    email,
    password,
})

module.exports = { getUserSchema, createUserSchema, updateUserSchemaFromAdmin, updateUserSchema };