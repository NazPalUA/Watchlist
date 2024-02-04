import CustomLoader from "../../../components/CustomLoader"
import ErrorMessage from "../../../components/ErrorMessage/ErrorMessage"

type EndMessageProps = {
  isLoading: boolean
  length: number
}

export default function EndMessage({ isLoading, length }: EndMessageProps) {
  return !isLoading && length === 0 ? (
    <ErrorMessage>No results</ErrorMessage>
  ) : (
    <CustomLoader />
  )
}
