import CustomLoader from "../../../components/CustomLoader"

type EndMessageProps = {
  isError: boolean | null
  length: number
  isFetching: boolean
}

// Component to render the end message based on the current state
export default function EndMessage({
  isError,
  length,
  isFetching,
}: EndMessageProps) {
  if (isError) {
    return <p>Error loading movies. Please try again later.</p>
  } else if (isFetching) {
    return <CustomLoader time={1000} />
  }
  return length ? <p>No more movies</p> : <p>No results</p>
}
