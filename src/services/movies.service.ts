import { Repository } from "typeorm";
import { Movie } from "../entities";
import { AppDataSource } from "../data-source";
import { AppError } from "../errors";
import { MovieCreate, MovieRead, MovieRepo, MovieUpdate } from "../interfaces";

const createMovieService = async (payLoad: MovieCreate): Promise<Movie> => {
  const repo: MovieRepo = AppDataSource.getRepository(Movie)
  const movie: Movie = await repo.save(payLoad)

  return movie
}

const readMovieService = async (): Promise<MovieRead> => {
  const repo: MovieRepo = AppDataSource.getRepository(Movie)
  const movies: MovieRead = await repo.find()

  return movies
}

const updateMovieService = async (movie: Movie, payLoad: MovieUpdate): Promise<Movie> => {
  const repo: MovieRepo = AppDataSource.getRepository(Movie)
  return await repo.save({ ...movie, ...payLoad })
}

const deleteMovieService = async (movie: Movie): Promise<void> => {
  const repo: MovieRepo = AppDataSource.getRepository(Movie)
  await repo.remove(movie)
}

export {
  createMovieService,
  readMovieService,
  updateMovieService,
  deleteMovieService
}