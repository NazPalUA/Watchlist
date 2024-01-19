import { useQuery } from 'react-query'
import { axiosInstance } from '../api'
import { SearchMovie } from '../types'

export const useSearchMovie = (query: string, page: number) => {
  return useQuery<SearchMovie, Error>(['searchMovies', query, page], async () => {
    const { data } = await axiosInstance.get(`/search/movie?query=${encodeURIComponent(query)}&page=${page}`)
    return data
  })
}
