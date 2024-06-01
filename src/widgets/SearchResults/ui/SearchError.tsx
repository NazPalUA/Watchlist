import { ErrorMessage } from "../../../shared/ui/ErrorMessage"

type SearchErrorProps = { error: Error | null }

export function SearchError({ error }: SearchErrorProps) {
  return (
    <ErrorMessage error={error}>
      Error searching movies. Please try again later
    </ErrorMessage>
  )
}
