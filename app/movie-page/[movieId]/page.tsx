import MoviePage from "@/src/pages/MoviePage"
import { Metadata } from "next"

type Props = {
  params: {
    movieId: string
  }
}

export const generateMetadata = ({ params }: Props): Metadata => {
  return {
    title: `Movie ${params.movieId}`,
  }
}

export default function Movie({ params }: Props) {
  return <MoviePage movieId={params.movieId} />
}
