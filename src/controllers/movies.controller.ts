import { Request, Response } from "express";
import { Movie } from "../entities";
import { createMovieService, deleteMovieService, readMovieService, updateMovieService } from "../services/movies.service";

const createMovieController = async (req: Request, res: Response): Promise<Response> => {
  const movie: Movie = await createMovieService(req.body)
  return res.status(201).json(movie)
}

const readMoviesController = async (req: Request, res: Response): Promise<Response> => {
  const movies: Array<Movie> = await readMovieService()
  return res.status(200).json(movies)
}

const updateMovieController = async (req: Request, res: Response): Promise<Response> => {
  const movieId: number = parseInt(req.params.id)
  const payload: any = req.body
  const movie: Movie = await updateMovieService(movieId, payload)

  return res.status(200).json(movie)
}

const deleteMovieController = async (req: Request, res: Response): Promise<Response> => {
  await deleteMovieService(parseInt(req.params.id))

  return res.status(200).json()
}

export {
  createMovieController,
  readMoviesController,
  updateMovieController,
  deleteMovieController
}