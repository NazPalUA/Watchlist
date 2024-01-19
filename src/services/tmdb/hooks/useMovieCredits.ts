import { useQuery } from 'react-query'
import { getMovieCredits } from '../api'

export const useMovieCredits = (movieId: string) => {
  return useQuery(['movieCredits', movieId], () => getMovieCredits(movieId))
}
