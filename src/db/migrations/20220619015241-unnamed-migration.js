'use strict';
const { CharacterSchema, CHARACTER_TABLE } = require('../models/character.model');
const { MovieSchema, MOVIES_TABLE } = require('../models/movies.model');
const { GenreSchema, GENRES_TABLE } = require('../models/genre.model');
const { MoviesCharactersSchema, MOVIES_CHARACTERS_TABLE } = require('../models/movies-characters.model');
const { UserSchema, USER_TABLE } = require('../models/user.model');

module.exports = {
  async up(queryInterface) {
    await queryInterface.createTable(USER_TABLE, UserSchema);
    await queryInterface.createTable(CHARACTER_TABLE, CharacterSchema);
    await queryInterface.createTable(GENRES_TABLE, GenreSchema)
    await queryInterface.createTable(MOVIES_TABLE, MovieSchema)
    await queryInterface.createTable(MOVIES_CHARACTERS_TABLE, MoviesCharactersSchema)
  },

  async down(queryInterface) {
    await queryInterface.createTable(USER_TABLE);
    await queryInterface.dropTable(CHARACTER_TABLE);
    await queryInterface.dropTable(MOVIES_TABLE)
    await queryInterface.dropTable(GENRES_TABLE)
    await queryInterface.dropTable(MOVIES_CHARACTERS_TABLE)
  },
};
