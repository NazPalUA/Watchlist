import { fetchFromTmdb } from "../../../shared/api/tmdb/lib/fetchFromTmdb"
import { MovieCredits } from "../model/MovieCredits"
import { PersonDetails } from "../model/PersonDetails"

export const fetchMovieCredits = (movieId: string) =>
  fetchFromTmdb<MovieCredits>(`/movie/${movieId}/credits`)

export const fetchPersonDetails = (personId: string) =>
  fetchFromTmdb<PersonDetails>(`/person/${personId}`)
