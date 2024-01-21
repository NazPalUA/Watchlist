import axios from 'axios'

const apiKey = import.meta.env.VITE_TMDB_API_KEY
const baseUrl = 'https://api.themoviedb.org/3'

const axiosInstance = axios.create({
    baseURL: baseUrl,
    params: {
        api_key: apiKey,
        language: 'en-US',
    }
})

// Function to fetch data from the TMDB API:
export const fetchTmdbApi = async <T>(endpoint: string): Promise<T> => {
    const { data } = await axiosInstance.get<T>(endpoint)
    return data
}