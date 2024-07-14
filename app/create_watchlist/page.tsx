import CreateWatchlistPage from "@/src/views/CreateWatchlistPage"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Create Watchlist",
}

export default function CreateWatchlist() {
  return <CreateWatchlistPage />
}
