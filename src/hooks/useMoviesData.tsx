import { useQuery } from "@tanstack/react-query"
import { getMovieDetails } from "../services/tmdb"

//TODO: Replace this with a custom hook that uses the useQuery hook from react-query. It is located in services/tmdb

export default function useMoviesData(movieIds: string[]) {
  return useQuery({
    queryKey: ["movies", movieIds],
    queryFn: async () => {
      if (movieIds) {
        const promises = movieIds.map((movieId) => getMovieDetails(movieId))
        const moviesData = await Promise.all(promises)
        return moviesData
      }
      return []
    },
  })
}
