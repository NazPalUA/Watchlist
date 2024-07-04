import { RelatedMovies } from "@/src/pages/MoviePage"

type Props = {
  params: {
    movieId: string
  }
}

export default function Related({ params }: Props) {
  return <RelatedMovies movieId={params.movieId} />
}
