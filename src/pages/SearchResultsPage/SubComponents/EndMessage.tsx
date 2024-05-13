import ErrorMessage from "../../../components/ErrorMessage/ErrorMessage"
import Loader from "../../../components/Loader"

type EndMessageProps = {
  isLoading: boolean
  length: number
}

export default function EndMessage({ isLoading, length }: EndMessageProps) {
  return !isLoading && length === 0 ? (
    <ErrorMessage>No results</ErrorMessage>
  ) : (
    <Loader />
  )
}
