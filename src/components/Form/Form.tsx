import { zodResolver } from "@hookform/resolvers/zod"
import { createContext, useContext } from "react"
import { FieldErrors, UseFormRegister, useForm } from "react-hook-form"
import { Form as FormUI } from "./UI/Form/Form"
import { TSignUpSchema, signUpSchema } from "./validation/signUpSchema"

export type FormProps = {
  children: React.ReactNode
}

type FormContextType = {
  register: UseFormRegister<TSignUpSchema>
  errors: FieldErrors<TSignUpSchema>
  isSubmitting: boolean
}
const FormContext = createContext<FormContextType | undefined>(undefined)

export const useFormContext = () => {
  const context = useContext(FormContext)
  if (context === undefined) {
    throw new Error("useFormContext must be used within a FormContext.Provider")
  }
  return context
}

export default function Form({ children }: FormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<TSignUpSchema>({
    resolver: zodResolver(signUpSchema),
  })

  const onSubmit = async (data: TSignUpSchema) => {
    await new Promise((resolve) => setTimeout(resolve, 1000)).then(() => {
      console.log(data)
    })
    reset()
  }

  return (
    <FormContext.Provider value={{ register, errors, isSubmitting }}>
      <FormUI onSubmit={handleSubmit(onSubmit)}>{children}</FormUI>
    </FormContext.Provider>
  )
}
