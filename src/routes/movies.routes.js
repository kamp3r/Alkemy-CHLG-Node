const moviesRouter = require('express').Router();

moviesRouter.get('/', (req, res) => {
  //all
});

moviesRouter.get('/', (req, res) => {
  const name = req.query.name;
});
moviesRouter.get('/', (req, res) => {
  const genre = req.query.genre;
});

moviesRouter.get('/', (req, res) => {
  const order = req.query.order;
});

module.exports = moviesRouter