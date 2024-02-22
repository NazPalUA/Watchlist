import { FieldError, UseFormRegister } from "react-hook-form"
import { InputsType } from "../SignUpWithEmailForm/SignUpWithEmailForm"
import style from "./InputGroup.module.scss"

type InputGroupProps = {
  label: string
  register: UseFormRegister<InputsType>
  name: keyof InputsType
  type?: string
  error?: FieldError
}

export default function InputGroup({
  label,
  register,
  name,
  type = "text",
  error,
}: InputGroupProps) {
  return (
    <div className={style.formGroup}>
      <label className={style.textLabel}>{label}</label>
      <input className={style.textInput} type={type} {...register(name)} />
      {error && <span className={style.error}>{error.message}</span>}
    </div>
  )
}
