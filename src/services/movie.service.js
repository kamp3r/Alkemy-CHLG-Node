const boom = require('@hapi/boom');
const { models } = require('../lib/sequelize');
const { Op } = require('sequelize');

class MovieService {
  async create(data) {
    try {
      const movie = await models.Movie.create(data);
      return movie;
    } catch (error) {
      throw boom.conflict('Movie already exists');
    }
  }
  async addCharacter(data) {
    try {
      const newMovie = await models.MovieCharacter.create(data);
      return newMovie;
    } catch (error) {
      throw boom.conflict('The movie already contains that character');
    }
  }
  async find(query) {
    const options = {
      where: {},
      attributes: { exclude: ['rating', 'type', 'genreId'] },
      order: [],
      include: [],
    };
    const { title, order, genreId } = query;
    if (title) {
      options.where.title = { [Op.like]: `%${title}%` };
    }
    if (order == 'ASC') {
      options.order = [['creationDate', 'ASC']];
    } else if (order == 'DESC') {
      options.order = [['creationDate', 'DESC']];
    }
    if (genreId) {
      options.where.genreId = genreId;
      options.include = [
        { association: 'genre', attributes: { exclude: ['id', 'image'] } },
      ];
    }
    const movies = await models.Movie.findAll(options);
    return movies;
  }
  async findById(id) {
    const movie = await models.Movie.findByPk(id, {
      attributes: { exclude: ['rating', 'type', 'genreId'] },
      include: [
        { association: 'genre', attributes: { exclude: ['id', 'image'] } },
        {
          association: 'characters',
          attributes: { exclude: ['id', 'history', 'image'] },
          through: { attributes: [] },
        },
      ],
    });
    if(!movie){
      throw boom.notFound('Movie not found');
    }
    return movie;
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

module.exports = MovieService;
