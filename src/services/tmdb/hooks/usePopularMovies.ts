import { useQuery } from 'react-query'
import { getPopularMovies } from '../api'

export const usePopularMovies = (page: number) => {
    return useQuery(['popularMovies', page], () => getPopularMovies(page))
}
