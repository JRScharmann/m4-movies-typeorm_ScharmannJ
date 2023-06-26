import { Router } from "express";
import { createMovieController, deleteMovieController, readMoviesController, updateMovieController } from "../controllers/movies.controller";
import middlewares from "../middlewares";
import { movieCreateSchema, movieUpdateSchema } from "../schemas";

const moviesRouter: Router = Router()

moviesRouter.post(
  '',
  middlewares.validateBody(movieCreateSchema),
  createMovieController
)
moviesRouter.get('', readMoviesController)

moviesRouter.use("/:id", middlewares.verifyIdExists)

moviesRouter.patch(
  "/:id",
  middlewares.validateBody(movieUpdateSchema),
  updateMovieController
)
moviesRouter.delete("/:id", deleteMovieController)

export default moviesRouter