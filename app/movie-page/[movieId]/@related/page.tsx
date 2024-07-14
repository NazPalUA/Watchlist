import { RelatedMovies } from "@/src/views/MoviePage"

type Props = {
  params: {
    movieId: string
  }
}

export default function Related({ params }: Props) {
  return <RelatedMovies movieId={params.movieId} />
}
