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
  return (
    <div>
      <h1>
        Movie <span>{params.movieId}</span>
      </h1>
    </div>
  )
}
