import { Button } from "../Button/Button"

export type SubmitButtonProps = {
  children: React.ReactNode
  isSubmitting?: boolean
}

export function SubmitButton({ children, isSubmitting }: SubmitButtonProps) {
  return (
    <Button size="l" type="submit" disabled={isSubmitting}>
      {isSubmitting ? "Submitting..." : children}
    </Button>
  )
}
