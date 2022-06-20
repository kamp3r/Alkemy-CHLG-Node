const { models } = require('../lib/sequelize');

class MovieService {
  async create(data) {
    const movie = await models.Movie.create(data);
    return movie;
  }
  async addCharacter(data) {
    const newCharacter = await models.MovieCharacter.create(data);
    return newCharacter;
  }
  async find() {
    const movies = await models.Movie.findAll();
    return movies;
  }
  async findById(id) {
    const movie = await models.Movie.findByPk(id, {
      include: [{association: 'characters', through: {attributes: []}}],
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
