interface Identifiable {
  id: number
}

export function getUniqueMovies<T extends Identifiable>(moviesData: T[]): T[] {
  const uniqueIds = new Set<number>()
  return moviesData.filter((movie) => {
    if (uniqueIds.has(movie.id)) {
      return false
    }
    uniqueIds.add(movie.id)
    return true
  })
}
