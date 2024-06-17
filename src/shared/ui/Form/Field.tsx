"use client"

import { useFormContext } from "react-hook-form"
import { ErrorMessage } from "../ErrorMessage"
import { Field as FieldUI } from "./ui/Field/Field"
import { Input } from "./ui/Input/Input"
import { Label } from "./ui/Label/Label"
import { TextArea } from "./ui/TextArea/TextArea"

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
