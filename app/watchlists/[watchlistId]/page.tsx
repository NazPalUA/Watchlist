import WatchlistPage from "@/src/views/WatchlistPage"
import { Metadata } from "next"

type Props = {
  params: {
    watchlistId: string
  }
}

export const generateMetadata = ({ params }: Props): Metadata => {
  return {
    title: `Watchlist ${params.watchlistId}`,
  }
}

export default function Watchlist({ params }: Props) {
  return <WatchlistPage watchlistId={params.watchlistId} />
}
