const { models } = require("../lib/sequelize");

class GenreService {
  async create(data) {
    const genre = await models.Genre.create(data);
    return genre;
  }
  async find() {
    const genres = await models.Genre.findAll();
    return genres;
  }
  async findById(id) {
    const genre = await models.Genre.findByPk(id);
    return genre;
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

module.exports = GenreService;
