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
};

class Genre extends Model {
  static associate() {}
  static config(sequelize) {
    return {
      sequelize,
      tableName: GENRES_TABLE,
      modelName: 'genre',
      timestamps: false,
    };
  }
}

module.exports = { GENRES_TABLE, GenreSchema, Genre };
