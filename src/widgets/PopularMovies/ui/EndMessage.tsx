import Loader from "../../../shared/ui/Loader"

type EndMessageProps = {
  length: number
  isFetching: boolean
}

// Component to render the end message based on the current state
export default function EndMessage({ length, isFetching }: EndMessageProps) {
  if (isFetching) {
    return <Loader />
  }
  return length ? <p>No more movies</p> : <p>No results</p>
}
