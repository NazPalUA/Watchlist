import type { MovieCredits, PersonDetails } from "../../../shared/api/tmdb"
import { fetchFromTmdb } from "../../../shared/api/tmdb"

export const fetchMovieCredits = (movieId: string) =>
  fetchFromTmdb<MovieCredits>(`/movie/${movieId}/credits`)

export const fetchPersonDetails = (personId: string) =>
  fetchFromTmdb<PersonDetails>(`/person/${personId}`)
