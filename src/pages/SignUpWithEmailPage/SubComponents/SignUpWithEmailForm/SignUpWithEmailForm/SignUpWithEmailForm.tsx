import { yupResolver } from "@hookform/resolvers/yup"
import { SubmitHandler, useForm } from "react-hook-form"
import * as yup from "yup"
import { UserDataType } from "../../../SignUpWithEmailPage"
import InputGroup from "../InputGroup/InputGroup"
import style from "./SignUpWithEmailForm.module.scss"

type SignUpWithEmailFormProps = {
  setSignUpData: (data: UserDataType) => void
}

export type InputsType = UserDataType & {
  confirmPassword: string
}

const schema = yup
  .object({
    name: yup.string().required("Name is required"),
    email: yup.string().email().required("Email is required"),
    password: yup.string().min(8).required("Password is required"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password"), undefined], "Passwords must match")
      .required("Confirm Password is required"),
  })
  .required()

export default function SignUpWithEmailForm({
  setSignUpData,
}: SignUpWithEmailFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<InputsType>({
    resolver: yupResolver(schema),
  })

  const onSubmit: SubmitHandler<InputsType> = (data) => {
    const { confirmPassword, ...userData } = data // remove confirmPassword from the data
    setSignUpData(userData)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={style.form}>
      <InputGroup
        label="Name"
        name="name"
        register={register}
        error={errors.name}
      />
      <InputGroup
        label="Email"
        name="email"
        register={register}
        error={errors.email}
      />
      <InputGroup
        label="Password"
        name="password"
        register={register}
        type="password"
        error={errors.password}
      />
      <InputGroup
        label="Confirm Password"
        name="confirmPassword"
        register={register}
        type="password"
        error={errors.confirmPassword}
      />

      <button className={style.submitBtn} type="submit">
        Submit
      </button>
    </form>
  )
}
