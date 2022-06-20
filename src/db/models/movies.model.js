const { Model, DataTypes } = require('sequelize');

const MOVIES_TABLE = 'movie';

const MovieSchema = {
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
  },
  image: {
    type: DataTypes.STRING,
    allowNull: false,
  }
};

class Movie extends Model {
  static associate(models) {
    this.belongsToMany(models.Character, {
      as: 'characters',
      through: 'MovieCharacter',
      attributes: [],
      foreignKey: 'movieId',
      otherKey: 'characterId',
    })
  }
  static config(sequelize) {
    return {
      sequelize,
      tableName: MOVIES_TABLE,
      modelName: 'Movie',
      timestamps: false,
    };
  }
}

module.exports = { MOVIES_TABLE, MovieSchema, Movie };
