import { Repository } from "typeorm";
import { Movie } from "../entities";
import { AppDataSource } from "../data-source";
import { AppError } from "../errors";

const createMovieService = async (payLoad: any): Promise<Movie> => {
  const repo: Repository<Movie> = AppDataSource.getRepository(Movie)
  const movie: Movie = await repo.save(payLoad)

  return movie
}

const readMovieService = async (): Promise<Array<Movie>> => {
  const repo: Repository<Movie> = AppDataSource.getRepository(Movie)
  const movies: Array<Movie> = await repo.find()

  return movies
}

const updateMovieService = async (movieId: number, payLoad: any): Promise<Movie> => {
  const repo: Repository<Movie> = AppDataSource.getRepository(Movie)
  const movie: Movie | null = await repo.findOneBy({ id: movieId })
  if (!movie) throw new AppError("Movie not found", 404)

  return await repo.save({ ...movie, ...payLoad })
}

const deleteMovieService = async (movieId: number): Promise<void> => {
  const repo: Repository<Movie> = AppDataSource.getRepository(Movie)
  const movie: Movie | null = await repo.findOneBy({ id: movieId })
  if (!movie) throw new AppError("Movie not found", 404)

  await repo.remove(movie)
}

export {
  createMovieService,
  readMovieService,
  updateMovieService,
  deleteMovieService
}