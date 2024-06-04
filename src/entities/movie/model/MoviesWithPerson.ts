import { Movie } from "../../../shared/api/tmdb"

export type MoviesWithPerson = {
  page: number
  results: Movie[]
  total_results: number
  total_pages: number
}
