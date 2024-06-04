import { useQuery } from "@tanstack/react-query"
import {
  fetchMovieRecommendations,
  fetchPopularMovies,
} from "../../../entities/movie/api/requests"
import { getUniqueMovies } from "../../../shared/lib/utils/getUniqueMovies"

export const useRelatedMoviesQuery = (movieId: string, length: number) =>
  useQuery({
    queryKey: ["movies", "related", movieId],
    queryFn: async () => {
      let recommendedPage = 1
      let recommendedMovies = await fetchMovieRecommendations(
        movieId,
        recommendedPage
      )
      let uniqueRecommendedMovies = getUniqueMovies(recommendedMovies.results)

      while (
        uniqueRecommendedMovies.length < length &&
        recommendedMovies.total_pages > recommendedPage
      ) {
        recommendedPage++
        recommendedMovies = await fetchMovieRecommendations(
          movieId,
          recommendedPage
        )
        uniqueRecommendedMovies = getUniqueMovies([
          ...uniqueRecommendedMovies,
          ...recommendedMovies.results,
        ])
      }

      let popularPage = 1
      let popularMovies = await fetchPopularMovies(popularPage)

      while (
        uniqueRecommendedMovies.length < length &&
        popularMovies.total_pages > popularPage
      ) {
        popularPage++
        popularMovies = await fetchPopularMovies(popularPage)
        uniqueRecommendedMovies = getUniqueMovies([
          ...uniqueRecommendedMovies,
          ...popularMovies.results,
        ])
      }

      return uniqueRecommendedMovies.slice(0, length)
    },
  })