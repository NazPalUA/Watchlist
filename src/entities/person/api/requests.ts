import type { MovieCredits, PersonDetails } from "../../../shared/API_ref/tmdb"
import { fetchFromTmdb } from "../../../shared/API_ref/tmdb"

export const fetchMovieCredits = (movieId: string) =>
  fetchFromTmdb<MovieCredits>(`/movie/${movieId}/credits`)

export const fetchPersonDetails = (personId: string) =>
  fetchFromTmdb<PersonDetails>(`/person/${personId}`)
