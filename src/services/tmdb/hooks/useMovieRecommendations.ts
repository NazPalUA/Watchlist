import { useQuery } from 'react-query'
import { axiosInstance } from '../api'
import { Recommendations } from '../types'

export const useMovieRecommendations = (movieId: string, page: number) => {
  return useQuery<Recommendations, Error>(['movieRecommendations', movieId, page], async () => {
    const { data } = await axiosInstance.get(`/movie/${movieId}/recommendations?page=${page}`)
    return data
  })
}