import { PersonWithMediaType } from "."

export type SearchPerson = {
    page: number,
    results: PersonWithMediaType[],
    total_pages: number,
    total_results: number,
}



