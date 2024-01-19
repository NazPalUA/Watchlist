import { useQuery } from 'react-query'
import { axiosInstance } from '../api'
import { PopularMovies } from '../types'

export const usePopularMovies = (page: number) => {
    return useQuery<PopularMovies, Error>(['popularMovies', page], async () => {
        const { data } = await axiosInstance.get(`/movie/popular?page=${page}`)
        return data
    })
}
