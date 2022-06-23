const moment = require("moment");
const { Model, DataTypes } = require("sequelize");
const { GENRES_TABLE } = require("./genre.model");

const MOVIES_TABLE = "movie";

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
    field: "creation_date",
    type: DataTypes.STRING,
    get(){
      return moment(this.getDataValue('creationDate')).format('DD-MM-YYYY')
    },
    allowNull: false,
  },
  rating: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  image: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  type: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  genreId: {
    field: "genre_id",
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: GENRES_TABLE,
      key: "id",
    },
    onUpdate: "CASCADE",
    onDelete: "SET NULL",
  },
};

class Movie extends Model {
  static associate(models) {
    this.belongsToMany(models.Character, {
      as: "characters",
      through: "MovieCharacter",
      foreignKey: "movieId",
      otherKey: "characterId",
      uniqueKey: ["movieId", "characterId"],
    });
    this.belongsTo(models.Genre, {
      as: "genre",
    });
  }
  static config(sequelize) {
    return {
      sequelize,
      tableName: MOVIES_TABLE,
      modelName: "Movie",
      timestamps: false,
    };
  }
}

module.exports = { MOVIES_TABLE, MovieSchema, Movie };
