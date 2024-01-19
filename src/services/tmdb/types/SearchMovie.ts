import { MovieWithMediaType } from "."

export type SearchMovie = {
    page: number,
    results: MovieWithMediaType[],
    total_pages: number,
    total_results: number,
}

