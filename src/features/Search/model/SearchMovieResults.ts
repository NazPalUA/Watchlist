import { MovieWithMediaType } from "../../../shared/api/tmdb"

export type SearchMovieResults = {
  page: number
  results: MovieWithMediaType[]
  total_pages: number
  total_results: number
}
