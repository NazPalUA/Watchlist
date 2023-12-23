export default function getURL(variant: "search" | "popular", searchText: string = "") {
    const BASE_URL = "https://api.themoviedb.org/3"
    const FULL_URL = variant === "popular" ?
        `${BASE_URL}/movie//popular?api_key=${import.meta.env.VITE_TMDB_API_KEY}&language=en-US&page=1`:
        `${BASE_URL}/search/movie?api_key=${import.meta.env.VITE_TMDB_API_KEY}&query=${searchText}&page=1`

        return FULL_URL
}