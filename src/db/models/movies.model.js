const { Model, DataTypes } = require('sequelize');

const MOVIES_TABLE = 'movies';

const CharacterSchema = {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  creationDate: {
    field: 'creation_field',
    type: DataTypes.DATE,
    allowNull: false,
  },
  rating: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0,
    validate: {
      min: 0,
      max: 5,
    },
  },
  image: {
    type: DataTypes.STRING,
    allowNull: false,
  },
};

class Movie extends Model {
  static associate() {}
  static config(sequelize) {
    return {
      sequelize,
      tableName: MOVIES_TABLE,
      modelName: 'movie',
      timestamps: false,
    };
  }
}

module.exports = { MOVIES_TABLE, CharacterSchema, Movie };
