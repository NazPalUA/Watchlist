type Props = {
  params: {
    watchlistId: string
  }
}

export default function EditWatchlist({ params }: Props) {
  return (
    <div>
      EditWatchlist <span>{params.watchlistId}</span>
    </div>
  )
}
