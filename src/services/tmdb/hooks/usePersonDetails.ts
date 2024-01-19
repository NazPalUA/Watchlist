import { useQuery } from 'react-query'
import { axiosInstance } from '../api'
import { PersonDetails } from '../types'

export const usePersonDetails = (personId: string) => {
  return useQuery<PersonDetails, Error>(['personDetails', personId], async () => {
    const { data } = await axiosInstance.get(`/person/${personId}`)
    return data
  })
}