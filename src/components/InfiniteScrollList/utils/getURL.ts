type BaseTypes = {
    page?: number,
}

export type SearchTypes = BaseTypes & {
    variant: "search";
    searchText: string | undefined;
}

export type PopularTypes = BaseTypes & {
    variant: "popular";
}

type getURLInputTypes = SearchTypes | PopularTypes;

export default function getURL(input: getURLInputTypes): string | null {
    const BASE_URL = "https://api.themoviedb.org/3";
    
    const apiKey = import.meta.env.VITE_TMDB_API_KEY;
    if (!apiKey) {
        // Handle the missing API key appropriately
        console.error("TMDB API key is not defined");
        return null;
    }

    const page = input.page || 1;

    if (input.variant === "popular") {
        return `${BASE_URL}/movie/popular?api_key=${apiKey}&language=en-US&page=${page}`;
    } else if (input.variant === "search") {
        if (input.searchText) {
            return `${BASE_URL}/search/movie?api_key=${apiKey}&query=${encodeURIComponent(input.searchText)}&page=${page}`;
        } else {
            console.warn("Search text is undefined");
            return null;
        }
    }

    return null;
}
