import { create } from "zustand"

type Movie = {
  id: string
  addedAt: Date
}

type Watchlist = {
  id: string
  createdAt: Date
  name: string
  description: string
  movies: Movie[]
}

type WatchlistsStore = {
  watchlists: Watchlist[]
  setWatchlists: (watchlists: Watchlist[]) => void
}

export const useWatchlistsStore = create<WatchlistsStore>((set) => ({
  watchlists: [],
  setWatchlists: (watchlists) => set({ watchlists }),
}))
