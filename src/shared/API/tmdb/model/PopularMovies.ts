import { Movie } from "../../../shared/api/tmdb"

export type PopularMovies = {
  page: number
  results: Movie[]
  total_pages: number
  total_results: number
}
