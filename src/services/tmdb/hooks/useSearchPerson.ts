import { useQuery } from 'react-query'
import { axiosInstance } from '../api'
import { SearchPerson } from '../types'

export const useSearchPerson = (query: string, page: number) => {
  return useQuery<SearchPerson, Error>(['searchPerson', query, page], async () => {
    const { data } = await axiosInstance.get(`/search/person?query=${encodeURIComponent(query)}&page=${page}`)
    return data
  })
}