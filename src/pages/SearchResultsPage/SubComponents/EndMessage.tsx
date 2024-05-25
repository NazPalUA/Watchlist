import ErrorMessage from "../../../shared/ui/ErrorMessage/ErrorMessage"
import Loader from "../../../shared/ui/Loader"

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
