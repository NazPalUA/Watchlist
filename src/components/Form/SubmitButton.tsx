import { useFormContext } from "react-hook-form"
import { SubmitButton as SubmitButtonUI } from "./UI/SubmitButton/SubmitButton"

export type SubmitButtonProps = { children: React.ReactNode }

export function SubmitButton({ children }: SubmitButtonProps) {
  const {
    formState: { isSubmitting },
  } = useFormContext()
  return (
    <SubmitButtonUI type="submit" disabled={isSubmitting}>
      {children}
    </SubmitButtonUI>
  )
}
