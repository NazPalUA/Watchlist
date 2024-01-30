type EndMessageProps = {
  error: boolean | null
  length: number
}

// Component to render the end message based on the current state
export default function EndMessage({ error, length }: EndMessageProps) {
  if (error) {
    return <p>Error loading movies. Please try again later.</p>
  }
  return length ? <p>No more movies</p> : <p>No results</p>
}
