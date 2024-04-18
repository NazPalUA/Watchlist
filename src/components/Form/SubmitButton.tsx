import { SubmitButton as SubmitButtonUI } from "./UI/SubmitButton/SubmitButton"

export type SubmitButtonProps = {
  children: React.ReactNode
  isSubmitting?: boolean
}

export function SubmitButton({ children, isSubmitting }: SubmitButtonProps) {
  return (
    <SubmitButtonUI type="submit" disabled={isSubmitting}>
      {isSubmitting ? "Submitting..." : children}
    </SubmitButtonUI>
  )
}
