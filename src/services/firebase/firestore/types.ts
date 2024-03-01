export type Movie = {
  addedAt: Date
  id: string
}

export type Watchlist = {
  name: string
  description: string
  createdAt: Date
  id: string
}

export type ManageWatchlistData = {
  name: string
  description: string
}
