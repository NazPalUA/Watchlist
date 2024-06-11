import type {
  SearchMovieResults,
  SearchPeople,
} from "../../../shared/API_ref/tmdb"
import { fetchFromTmdb } from "../../../shared/API_ref/tmdb"

type SearchType = "movie" | "person"

type SearchResults<T extends SearchType> = T extends "movie"
  ? SearchMovieResults
  : T extends "person"
  ? SearchPeople
  : never

const fetchSearch = <T extends SearchType>(
  type: T,
  query: string,
  page: number = 1
) =>
  fetchFromTmdb<SearchResults<T>>(
    `/search/${type}`,
    {
      query: encodeURIComponent(query),
      page,
    },
    true
  )

export const fetchSearchMovies = (query: string, page: number = 1) =>
  fetchSearch("movie", query, page)

export const fetchSearchPeople = (query: string, page: number = 1) =>
  fetchSearch("person", query, page)
