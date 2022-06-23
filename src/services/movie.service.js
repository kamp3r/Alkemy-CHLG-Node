const { models } = require('../lib/sequelize');
const { Op } = require('sequelize');

class MovieService {
  async create(data) {
    const movie = await models.Movie.create(data);
    return movie;
  }
  async addCharacter(data) {
    const newCharacter = await models.MovieCharacter.create(data);
    return newCharacter;
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
      options.include = [{association: 'genre', attributes: { exclude: ['id', 'image']}}]
    }
    const movies = await models.Movie.findAll(options);
    return movies;
  }
  async findById(id) {
    const movie = await models.Movie.findByPk(id, {
      include: [{ association: 'characters', through: { attributes: [] } }],
    });
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
