import {
  useMovieRecommendations,
  usePopularMovies,
} from "../../../services/tmdb"

export default function useRelatedData(movieId: string, numberOfItems = 25) {
  const {
    isLoading: isPopularLoading,
    isError: isPopularError,
    data: popularMoviesData,
  } = usePopularMovies()

  const {
    isLoading: isRecommendedLoading,
    isError: isRecommendedError,
    data: recommendedMoviesData,
  } = useMovieRecommendations(movieId)

  const recommendedMovies = recommendedMoviesData?.results ?? []
  const popularMovies = popularMoviesData?.results ?? []

  let relatedMovies = [...recommendedMovies]

  if (relatedMovies.length < numberOfItems) {
    const popularMoviesToAdd = popularMovies.slice(
      0,
      numberOfItems - relatedMovies.length
    )
    relatedMovies = [...relatedMovies, ...popularMoviesToAdd]
  } else if (relatedMovies.length > numberOfItems) {
    relatedMovies = relatedMovies.slice(0, numberOfItems)
  }

  const isLoading = isPopularLoading || isRecommendedLoading
  const isError = isPopularError || isRecommendedError

  return { isLoading, isError, relatedMovies }
}
