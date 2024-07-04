import { Cast } from "@/src/pages/MoviePage"

type Props = {
  params: {
    movieId: string
  }
}

export default function MovieCast({ params }: Props) {
  return <Cast movieId={params.movieId} />
}
