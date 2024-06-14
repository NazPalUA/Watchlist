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
  return (
    <div>
      <h1>
        Watchlist <span>{params.watchlistId}</span>
      </h1>
    </div>
  )
}
