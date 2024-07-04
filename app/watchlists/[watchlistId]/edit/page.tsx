import EditWatchlistPage from "@/src/pages/EditWatchlistPage"
import { Metadata } from "next"

type Props = {
  params: {
    watchlistId: string
  }
}

export const generateMetadata = ({ params }: Props): Metadata => {
  return {
    title: `Edit Watchlist ${params.watchlistId}`,
  }
}

export default function EditWatchlist({ params }: Props) {
  return <EditWatchlistPage watchlistId={params.watchlistId} />
}
