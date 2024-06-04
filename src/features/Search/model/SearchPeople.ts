import { PersonWithMediaType } from "../../../shared/api/tmdb"

export type SearchPeople = {
  page: number
  results: PersonWithMediaType[]
  total_pages: number
  total_results: number
}
