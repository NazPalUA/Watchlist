import { useQuery } from 'react-query'
import { axiosInstance } from '../api'
import { MovieDetails } from '../types'

export const useMovieDetails = (movieId: string) => {
  return useQuery<MovieDetails, Error>(['movieDetails', movieId], async () => {
    const { data } = await axiosInstance.get(`/movie/${movieId}`)
    return data
  })
}
