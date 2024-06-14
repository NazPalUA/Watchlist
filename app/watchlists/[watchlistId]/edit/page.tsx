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
  return (
    <div>
      EditWatchlist <span>{params.watchlistId}</span>
    </div>
  )
}
