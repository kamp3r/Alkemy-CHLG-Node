const { Model, DataTypes } = require('sequelize');
const { CHARACTER_TABLE} = require('./character.model');
const { MOVIES_TABLE} = require('./movies.model')

const MOVIES_CHARACTERS_TABLE = 'movies_characters';


const MoviesCharactersSchema = {
  movieId:{
    field: 'movie_id',
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    references: {
      model: MOVIES_TABLE,
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
  },
  characterId:{
    field: 'character_id',
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    references: {
      model: CHARACTER_TABLE,
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
  }
};


class MovieCharacter extends Model {
  static associate(models) {

  }
  static config(sequelize) {
    return {
      sequelize,
      tableName: MOVIES_CHARACTERS_TABLE,
      modelName: 'MovieCharacter',
      timestamps: false,
    };
  }
}

module.exports = { MOVIES_CHARACTERS_TABLE, MoviesCharactersSchema, MovieCharacter};
