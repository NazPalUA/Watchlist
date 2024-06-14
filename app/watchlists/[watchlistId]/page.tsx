type Props = {
  params: {
    watchlistId: string
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
