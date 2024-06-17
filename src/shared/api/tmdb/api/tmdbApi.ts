import axios from "axios"

const api_key = process.env.NEXT_PUBLIC_TMDB_API_KEY
const baseURL = "https://api.themoviedb.org/3"

export const tmdbApi = axios.create({
  baseURL,
  params: {
    api_key,
    language: "en-US",
  },
})
