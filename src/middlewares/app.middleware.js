const express = require('express')
const routerAPI = require('../routes/index.routes')

const appMiddleware = (app)=>{
    app.use(express.urlencoded({extended: true}));
    app.use(express.json());
    routerAPI(app)
}

module.exports = appMiddleware