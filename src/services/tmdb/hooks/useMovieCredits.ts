import { useQuery } from 'react-query'
import { axiosInstance } from '../api'
import { Credits } from '../types'

export const useMovieCredits = (movieId: string) => {
  return useQuery<Credits, Error>(['movieCredits', movieId], async () => {
    const { data } = await axiosInstance.get(`/movie/${movieId}/credits`)
    return data
  })
}