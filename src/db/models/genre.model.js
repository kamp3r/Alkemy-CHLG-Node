const { Model, DataTypes } = require('sequelize');

const GENRES_TABLE = 'genres';

const GenreSchema = {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  image: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  movieId: {
    field: 'movie_id',
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'movie',
      key: 'id',
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL',
  },
};

class Genre extends Model {
  static associate(models) {
    this.belongsTo(models.Movie, {
      as: 'movie',
      foreignKey: 'movieId',
      });
  }
  static config(sequelize) {
    return {
      sequelize,
      tableName: GENRES_TABLE,
      modelName: 'Genre',
      timestamps: false,
    };
  }
}

module.exports = { GENRES_TABLE, GenreSchema, Genre };
