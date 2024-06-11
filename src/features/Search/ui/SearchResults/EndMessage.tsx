import { ErrorMessage } from "../../../../shared/UI_ref/ErrorMessage"
import Loader from "../../../../shared/UI_ref/Loader"

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
