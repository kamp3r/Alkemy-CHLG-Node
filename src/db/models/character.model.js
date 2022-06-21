const { Model, DataTypes } = require('sequelize');
const { MOVIES_TABLE } = require('./movies.model');

const CHARACTER_TABLE = 'character';

const CharacterSchema = {
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
  age: {
    type: DataTypes.BIGINT,
    allowNull: false,
  },
  weight: {
    type: DataTypes.BIGINT,
    allowNull: false,
  },
  history: {
    type: DataTypes.STRING,
    allowNull: false
  },
  image: {
    type: DataTypes.STRING,
    allowNull: false
  },
};

class Character extends Model {
    static associate(models){
      this.belongsToMany(models.Movie, {
        as: 'movies',
        through: 'MovieCharacter',
        foreignKey: 'characterId',
        otherKey: 'movieId',
      })
    }
    static config(sequelize){
        return {
            sequelize,
            tableName: CHARACTER_TABLE,
            modelName: 'Character',
            timestamps: false,
        }
    }
}

module.exports = {CHARACTER_TABLE, CharacterSchema, Character}