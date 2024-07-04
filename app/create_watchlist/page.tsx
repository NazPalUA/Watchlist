import CreateWatchlistPage from "@/src/pages/CreateWatchlistPage"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Create Watchlist",
}

export default function CreateWatchlist() {
  return <CreateWatchlistPage />
}
