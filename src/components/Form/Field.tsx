import { useFormContext } from "react-hook-form"
import ErrorMessage from "../ErrorMessage/ErrorMessage"
import { Field as FieldUI } from "./UI/Field/Field"
import { Input } from "./UI/Input/Input"
import { Label } from "./UI/Label/Label"
import { TextArea } from "./UI/TextArea/TextArea"

export type FieldProps = {
  type?: "password" | "text" | "email" | "textarea"
  name: string
  children: React.ReactNode
}

export function Field({ type = "text", children, name }: FieldProps) {
  const {
    register,
    formState: { errors },
  } = useFormContext()

  return (
    <FieldUI>
      <Label>{children}</Label>
      {type === "textarea" ? (
        <TextArea {...register(name)} />
      ) : (
        <Input type={type} {...register(name)} />
      )}
      {errors[name] && (
        <ErrorMessage
          customMessageStyle={{ margin: 0, marginTop: "0.2rem" }}
          wrapperStyle={{ margin: 0 }}
        >
          {errors[name]?.message?.toString()}
        </ErrorMessage>
      )}
    </FieldUI>
  )
}
