const boom = require('@hapi/boom');
const { models } = require('../lib/sequelize');
const { Op } = require('sequelize');

class CharacterService {
  async create(data) {
    try {
      const character = await models.Character.create(data);
      return character;
    } catch (error) {
      throw boom.conflict('Character already exists');
    }
  }
  async addMovie(data) {
    try {
      const newMovie = await models.MovieCharacter.create(data);
      return newMovie;
    } catch (error) {
      throw boom.conflict('The character already exists in this movie');
    }
  }
  async find(query) {
    const options = {
      where: {},
      attributes: { exclude: ['weight', 'age', 'history'] },
    };
    const { name, age, movieId } = query;
    if (name) {
      options.where.name = { [Op.like]: `%${name}%` };
    }
    if (age) {
      options.where.age = age;
    }
    if (movieId) {
      options.include = [
        {
          association: 'movies',
          where: { id: movieId },
          attributes: { exclude: ['rating'] },
          through: { attributes: [] },
        },
      ];
    }
    const characters = await models.Character.findAll(options);
    return characters;
  }
  async findById(id) {
    const character = await models.Character.findByPk(id, {
      attributes: { exclude: ['id'] },
      include: [
        {
          association: 'movies',
          attributes: ['creationDate', 'title', 'image'],
          include: [{ association: 'genre', attributes: ['name'] }],
          through: { attributes: [] },
        },
      ],
    });
    if (!character) {
      throw boom.notFound('Character not found');
    }
    return character;
  }
  async update(id, data) {
    const toUpdate = await this.findById(id);
    const finalData = await toUpdate.update(data);
    return finalData;
  }
  async delete(id) {
    const toDelete = await this.findById(id);
    const deleted = await toDelete.destroy();
    return deleted;
  }
}

module.exports = CharacterService;
