const { Model, DataTypes } = require('sequelize');

const CHARACTER_TABLE = 'characters';

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
  }
};

class Character extends Model {
    static associate(){

    }
    static config(sequelize){
        return {
            sequelize,
            tableName: CHARACTER_TABLE,
            modelName: 'character',
            timestamps: false,
        }
    }
}

module.exports = {CHARACTER_TABLE, CharacterSchema, Character}