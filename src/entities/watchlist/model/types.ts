import { FieldValue } from "firebase/firestore"

export type WatchlistMovie = {
  addedAt: FieldValue
  tmdbId: string
}

export type Watchlist = {
  name: string
  description: string
  createdAt: FieldValue
  lastModifiedAt: FieldValue
  id: string
}

export type WatchedMovie = {
  tmdbId: string
}
