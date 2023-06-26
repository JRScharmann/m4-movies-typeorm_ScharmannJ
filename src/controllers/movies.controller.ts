import { Request, Response } from "express";
import { Movie } from "../entities";
import { createMovieService, deleteMovieService, readMovieService, updateMovieService } from "../services/movies.service";
import { MovieRead, MovieUpdate } from "../interfaces";

const createMovieController = async (req: Request, res: Response): Promise<Response> => {
  const movie: Movie = await createMovieService(req.body)
  return res.status(201).json(movie)
}

const readMoviesController = async (req: Request, res: Response): Promise<Response> => {
  const movies: MovieRead = await readMovieService()
  return res.status(200).json(movies)
}

const updateMovieController = async (req: Request, res: Response): Promise<Response> => {
  const payload: MovieUpdate = req.body
  const foundMovie: Movie = res.locals.movie

  const movie: Movie = await updateMovieService(foundMovie, payload)

  return res.status(200).json(movie)
}

const deleteMovieController = async (req: Request, res: Response): Promise<Response> => {
  await deleteMovieService(res.locals.movie)
  return res.status(204).json()
}

export {
  createMovieController,
  readMoviesController,
  updateMovieController,
  deleteMovieController
}