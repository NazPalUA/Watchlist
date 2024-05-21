import ErrorMessage from "../../../shared/UI/ErrorMessage/ErrorMessage"
import Loader from "../../../shared/UI/Loader"

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
