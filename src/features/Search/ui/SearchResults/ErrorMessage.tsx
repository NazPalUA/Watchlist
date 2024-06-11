import { ErrorMessage as ErMessage } from "../../../../shared/UI_ref/ErrorMessage"

type ErrorMessageProps = { error: Error | null }

export function ErrorMessage({ error }: ErrorMessageProps) {
  return (
    <ErMessage error={error}>
      Error searching movies. Please try again later
    </ErMessage>
  )
}
