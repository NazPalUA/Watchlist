import { useFormContext } from "./Form"
import { SubmitButton as SubmitButtonUI } from "./UI/SubmitButton/SubmitButton"

export type SubmitButtonProps = { children: React.ReactNode }

export default function SubmitButton({ children }: SubmitButtonProps) {
  const { isSubmitting } = useFormContext()
  return (
    <SubmitButtonUI type="submit" disabled={isSubmitting}>
      {children}
    </SubmitButtonUI>
  )
}
