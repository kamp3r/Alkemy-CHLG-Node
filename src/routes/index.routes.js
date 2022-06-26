const characterRouter = require('./characters.routes')
const moviesRouter = require('./movies.routes')
const genresRouter = require('./genre.routes')
const userRouter = require('./user.routes')
const authRouter = require('./auth.routes')

const routerAPI = (app)=>{
    app.use('/api/characters', characterRouter);
    app.use('/api/movies', moviesRouter);
    app.use('/api/genres', genresRouter);
    app.use('/api/users', userRouter);
    app.use('/api/auth', authRouter);
}

module.exports = routerAPI