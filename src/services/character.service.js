const { models } = require('../lib/sequelize');

class CharacterService {
  async create(data) {
    const character = await models.Character.create(data);
    return character;
  }
  async addMovie(data) {
    const newMovie = await models.MovieCharacter.create(data);
    return newMovie;
  }
  async find() {
    const characters = await models.Character.findAll();
    return characters;
  }
  async findById(id) {
    const character = await models.Character.findByPk(id, {
      include: [{association: 'movies', through: {attributes: []}}],
    });
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
