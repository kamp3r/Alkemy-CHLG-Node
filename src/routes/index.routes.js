const characterRouter = require('./characters.routes')
const moviesRouter = require('./movies.routes')
const genresRouter = require('./genre.routes')

const routerAPI = (app)=>{
    app.use('/api/characters', characterRouter);
    app.use('/api/movies', moviesRouter);
    app.use('/api/genres', genresRouter);
}

module.exports = routerAPI