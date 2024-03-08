import { FieldError, FieldValues, Path, UseFormRegister } from "react-hook-form"
import style from "./InputGroup.module.scss"

type InputGroupProps<T extends FieldValues> = {
  label: string
  register: UseFormRegister<T>
  name: keyof T
  type?: "password" | "text" | "email"
  error?: FieldError
}

export default function InputGroup<T extends FieldValues>({
  label,
  register,
  name,
  type = "text",
  error,
}: InputGroupProps<T>) {
  return (
    <div className={style.formGroup}>
      <label className={style.textLabel}>{label}</label>
      <input
        className={style.textInput}
        type={type}
        {...register(name as Path<T>)}
      />
      {error && <span className={style.error}>{error.message}</span>}
    </div>
  )
}
