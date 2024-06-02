import axios from "axios"

const apiKey = import.meta.env.VITE_TMDB_API_KEY
const BASE_URL = "https://api.themoviedb.org/3"

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  params: {
    api_key: apiKey,
    language: "en-US",
  },
})

// Function to fetch data from the TMDB API:
export const fetchTmdbApi = async <T>(
  endpoint: string,
  params: object = {}
): Promise<T> => {
  try {
    const response = await axiosInstance.get<T>(endpoint, { params })
    return response.data
  } catch (error) {
    console.error(`Error fetching data from TMDB API: ${error}`)
    throw error
  }
}
