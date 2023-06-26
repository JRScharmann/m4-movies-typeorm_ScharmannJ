import { Router } from "express";
import { createMovieController, deleteMovieController, readMoviesController, updateMovieController } from "../controllers/movies.controller";

const moviesRouter: Router = Router()

moviesRouter.post('', createMovieController)
moviesRouter.get('', readMoviesController)
moviesRouter.patch('/:id', updateMovieController)
moviesRouter.delete('/:id', deleteMovieController)

export default moviesRouter