import { useQuery } from 'react-query'
import { axiosInstance } from '../api'
import { MoviesWithPerson } from '../types'

export const useMoviesWithPerson = (personId: string, page: number) => {
    return useQuery<MoviesWithPerson, Error>(['moviesWithPerson', personId, page], async () => {
        const { data } = await axiosInstance.get(`/discover/movie?with_people=${personId}&page=${page}`)
        return data
    })
}