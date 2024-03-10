import ErrorMessage from "../ErrorMessage/ErrorMessage"
import { useFormContext } from "./Form"
import { Field as FieldUI } from "./UI/Field/Field"
import { Input } from "./UI/Input/Input"
import { Label } from "./UI/Label/Label"
import { TextArea } from "./UI/TextArea/TextArea"
import { TSignUpSchema } from "./validation/signUpSchema"

export type FieldProps = {
  type?: "password" | "text" | "email" | "textarea"
  name: keyof TSignUpSchema
  children: React.ReactNode
}

export default function Field({ type = "text", children, name }: FieldProps) {
  const { register, errors } = useFormContext()

  return (
    <FieldUI>
      <Label>{children}</Label>
      {type === "textarea" ? (
        <TextArea {...register(name)} />
      ) : (
        <Input type={type} {...register(name)} />
      )}
      {errors[name] && <ErrorMessage>{errors[name]?.message}</ErrorMessage>}
    </FieldUI>
  )
}
