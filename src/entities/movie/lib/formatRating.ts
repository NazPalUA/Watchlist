
/**
 * Formats the movie rating by rounding it.
 * @param rating - The movie's rating.
 * @returns The formatted rating.
 */
export default function formatRating (rating: number): number {
    return Math.round(rating * 10)
}