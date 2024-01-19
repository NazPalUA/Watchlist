import { useQuery } from 'react-query'
import { getMoviesWithPerson } from '../api'

export const useMoviesWithPerson = (personId: string, page: number) => {
    return useQuery(['moviesWithPerson', personId], () => getMoviesWithPerson(personId, page))
}
