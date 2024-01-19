import { useQuery } from 'react-query'
import { getPersonDetails } from '../api'

export const usePersonDetails = (movieId: string) => {
  return useQuery(['personDetails', movieId], () => getPersonDetails(movieId))
}
