type BaseTypes = {
    page?: number,
}

export type SearchTypes = BaseTypes & {
    variant: "search"
    searchText: string | undefined | null
}

export type PopularTypes = BaseTypes & {
    variant: "popular"
}

type getURLInputTypes = SearchTypes | PopularTypes

/**
 * Constructs a URL for fetching movie data based on specified parameters.
 * Handles different query types such as "search" and "popular".
 *
 * @param input Parameters to construct the URL.
 * @returns Constructed URL or null if parameters are invalid.
 * @throws Error if the API key is missing or other critical issues.
 */

export default function getURL(input: getURLInputTypes): string | null {
    const BASE_URL = "https://api.themoviedb.org/3"
    const apiKey = import.meta.env.VITE_TMDB_API_KEY

    if (!apiKey) {
        throw new Error("TMDB API key is not defined")
    }

    const page = input.page || 1 // default page set in case page param was not provided

    if (input.variant === "popular") {
        return `${BASE_URL}/movie/popular?api_key=${apiKey}&language=en-US&page=${page}`
    } else if (input.variant === "search") {
        if (input.searchText) {
            return `${BASE_URL}/search/movie?api_key=${apiKey}&query=${encodeURIComponent(input.searchText)}&page=${page}`
        } else {
            throw new Error("Search text is undefined for search variant")
        }
    }

    return null
}