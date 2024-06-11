import { ErrorMessage as ErMessage } from "../../../shared/ui/ErrorMessage"

type ErrorMessageProps = { error: Error | null }

export default function ErrorMessage({ error }: ErrorMessageProps) {
  return (
    <ErMessage error={error}>
      Error loading movies. Please try again later.
    </ErMessage>
  )
}
