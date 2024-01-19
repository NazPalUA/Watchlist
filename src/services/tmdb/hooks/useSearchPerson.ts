import { useQuery } from 'react-query'
import { searchPerson } from '../api'

export const useSearchPerson = (query: string, page: number) => {
  return useQuery(['searchPerson', query, page], () => searchPerson(query, page))
}
