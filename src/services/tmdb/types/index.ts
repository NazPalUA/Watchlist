export * from './MovieCredits'
export * from './MovieDetails'
export * from './PersonDetails'
export * from './PopularMovies'
export * from './RecommendedMovies'
export * from './SearchMovieResults'
export * from './SearchPeople'
export * from './MoviesWithPerson'

export type Movie = {
    id: number,
    poster_path: string,
    adult: boolean,
    overview: string,
    release_date: string,
    genre_ids: number[],
    original_title: string,
    original_language: string,
    title: string,
    backdrop_path: string,
    popularity: number,
    vote_count: number,
    video: boolean,
    vote_average: number,
}

export type MovieWithMediaType = Movie & {
    media_type: 'movie'
}

export type TV = {
    id: number,
    name: string,
    first_air_date: string,
    backdrop_path: string,
    genre_ids: number[],
    origin_country: string[],
    original_language: string,
    original_name: string,
    overview: string,
    poster_path: string,
    popularity: number,
    vote_count: number,
    vote_average: number,
}

export type TVWithMediaType = TV & {
    media_type: 'tv',
}

export type Person = {
    id: number,
    name: string,
    known_for: KnownFor[],
    profile_path: string,
    adult: boolean,
    known_for_department: string,
    gender: number,
    popularity: number,
}

export type PersonWithMediaType = Person & {
    media_type: 'person',
}

type KnownFor = MovieWithMediaType | TVWithMediaType