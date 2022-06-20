const {Character, CharacterSchema} = require('./character.model');
const {Movie, MovieSchema} = require('./movies.model');
const {Genre, GenreSchema} = require('./genre.model');
const {MovieCharacter, MoviesCharactersSchema} = require('./movies-characters.model');

const setUpModel = (sequelize) =>{
    Character.init(CharacterSchema, Character.config(sequelize));
    Movie.init(MovieSchema, Movie.config(sequelize));
    Genre.init(GenreSchema, Genre.config(sequelize));
    MovieCharacter.init(MoviesCharactersSchema, MovieCharacter.config(sequelize));

    Character.associate(sequelize.models)
    Movie.associate(sequelize.models)
    Genre.associate(sequelize.models)
    MovieCharacter.associate(sequelize.models)
}

module.exports = setUpModel;