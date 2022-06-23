const genresRouter = require("express").Router();
const GenreService = require("../services/genre.service");
const validationData = require("../middlewares/validator.middleware");
const {
  getGenreSchema,
  createGenreSchema,
  updateGenreSchema,
} = require("../schemas/genre.schema");
const service = new GenreService();

genresRouter.get("/", async (req, res, next) => {
  try {
    const genres = await service.find();
    res.json(genres);
  } catch (err) {
    next(err);
  }
});

genresRouter.get(
  "/:id",
  validationData(getGenreSchema, "params"),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const genre = await service.findById(id);
      res.json(genre);
    } catch (err) {
      next(err);
    }
  }
);

genresRouter.post(
  "/",
  validationData(createGenreSchema, "body"),
  async (req, res, next) => {
    try {
      const data = req.body;
      const genre = await service.create(data);
      res.status(201).json(genre);
    } catch (err) {
      next(err);
    }
  }
);

genresRouter.patch(
  "/:id",
  validationData(getGenreSchema, "params"),
  validationData(updateGenreSchema, "body"),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const data = req.body;
      const genre = await service.update(id, data);
      res.json(genre);
    } catch (err) {
      next(err);
    }
  }
);

genresRouter.delete(
  "/:id",
  validationData(getGenreSchema, "params"),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const genre = await service.delete(id);
      res.json(genre);
    } catch (err) {
      next(err);
    }
  }
);

module.exports = genresRouter;
