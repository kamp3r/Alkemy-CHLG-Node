const characterRouter = require('express').Router()

characterRouter.get('/', (req, res)=>{
    const all = req.body
})

characterRouter.get('/', (req, res)=>{
    const name = req.query.name
})

characterRouter.get('/', (req, res)=>{
    const age = req.query.age
})

characterRouter.get('/', (req, res)=>{
    const idMovie = req.query.movies
})

module.exports = characterRouter