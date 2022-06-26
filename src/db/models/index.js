const {Character, CharacterSchema} = require('./character.model');
const {Movie, MovieSchema} = require('./movies.model');
const {Genre, GenreSchema} = require('./genre.model');
const {MovieCharacter, MoviesCharactersSchema} = require('./movies-characters.model');
const {User, UserSchema} = require('./user.model');

const setUpModel = (sequelize) =>{
    Character.init(CharacterSchema, Character.config(sequelize));
    Genre.init(GenreSchema, Genre.config(sequelize));
    Movie.init(MovieSchema, Movie.config(sequelize));
    MovieCharacter.init(MoviesCharactersSchema, MovieCharacter.config(sequelize));
    User.init(UserSchema, User.config(sequelize));

    Character.associate(sequelize.models)
    Movie.associate(sequelize.models)
    Genre.associate(sequelize.models)

}

module.exports = setUpModel;