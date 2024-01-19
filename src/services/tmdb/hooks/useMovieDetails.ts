import { useQuery } from 'react-query'
import { getMovieDetails } from '../api'

export const useMovieDetails = (movieId: string) => {
  return useQuery(['movieDetails', movieId], () => getMovieDetails(movieId))
}
