import { filterUniqueById } from "../../../lib/utils/filterUniqueById"
import { tmdbApi } from "../api/tmdbApi"

// Generic function to handle API requests
export const fetchFromTmdb = async <T>(
  endpoint: string,
  params?: object,
  filterUnique: boolean = false
): Promise<T> => {
  const response = await tmdbApi.get<T>(endpoint, { params })
  const data = response.data

  if (filterUnique && Array.isArray(data)) {
    return filterUniqueById(data) as T
  }

  return data
}
