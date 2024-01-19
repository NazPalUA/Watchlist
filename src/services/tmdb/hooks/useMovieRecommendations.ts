import { useQuery } from 'react-query'
import { getMovieRecommendations } from '../api'

export const useMovieRecommendations = (movieId: string, page: number) => {
  return useQuery(['movieRecommendations', movieId, page], () => getMovieRecommendations(movieId, page))
}
