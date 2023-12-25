import { Result as Movie } from '../../../types/PopularOrSearchMoviesAPI'

/**
 * Filters out duplicate movies from an array of movies based on their ID.
 * This is particularly useful when combining movie data from multiple API calls
 * to ensure no duplicates are presented to the user.
*
* @param moviesData - Array of movie objects.
* @returns Array of unique movie objects.
*/

export default function getUniqueMoviesData(moviesData: Movie[]) {
    const uniqueIds = new Set()
    const uniqueData = moviesData.filter((movie) => {
        if (!uniqueIds.has(movie.id)) {
            uniqueIds.add(movie.id)
            return true
        }
        return false
    })

    return uniqueData
}
