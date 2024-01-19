import { useQuery } from 'react-query'
import { searchMovie } from '../api'

export const useSearchMovie = (query: string, page: number) => {
  return useQuery(['searchMovies', query, page], () => searchMovie(query, page))
}
