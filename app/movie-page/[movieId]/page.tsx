type Props = {
  params: {
    movieId: string
  }
}

export default function Movie({ params }: Props) {
  return (
    <div>
      <h1>
        Movie <span>{params.movieId}</span>
      </h1>
    </div>
  )
}
