import { Movie } from "."

export type PopularMovies = {
    page: number,
    results: Movie[],
    total_pages: number,
    total_results: number,
}

