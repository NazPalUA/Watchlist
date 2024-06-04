import { Movie } from ".."

export type MoviesWithPerson = {
  page: number
  results: Movie[]
  total_results: number
  total_pages: number
}
