import { Cast } from "@/src/views/MoviePage"

type Props = {
  params: {
    movieId: string
  }
}

export default function MovieCast({ params }: Props) {
  return <Cast movieId={params.movieId} />
}
