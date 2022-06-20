const characterRouter = require('./characters.routes')
const moviesRouter = require('./movies.routes')

const routerAPI = (app)=>{
    app.use('/api/characters', characterRouter)
    app.use('/api/movies', moviesRouter)
}

module.exports = routerAPI