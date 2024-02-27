import { yupResolver } from "@hookform/resolvers/yup"
import { doc, setDoc } from "firebase/firestore"
import { SubmitHandler, useForm } from "react-hook-form"
import { useLocation, useNavigate } from "react-router-dom"
import * as yup from "yup"
import InputGroup from "../../../../../components/InputGroup/InputGroup"
import { signUpWithEmail } from "../../../../../services/firebase/firebase-auth"
import { db } from "../../../../../services/firebase/firebase-config"
import { UserDataType } from "../../../SignUpWithEmailPage"
import style from "./SignUpWithEmailForm.module.scss"

type SignUpWithEmailFormProps = {}

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

export default function SignUpWithEmailForm({}: SignUpWithEmailFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<InputsType>({
    resolver: yupResolver(schema),
  })

  let navigate = useNavigate()
  let location = useLocation()
  let from = location.state?.from?.pathname || "/"

  const onSubmit: SubmitHandler<InputsType> = (data) => {
    const { confirmPassword, ...userData } = data // remove confirmPassword from the data
    signUpWithEmail(userData)
      .then((credentials) => {
        const docRef = doc(db, "users", credentials.user.uid)
        setDoc(docRef, {
          email: userData.email,
          name: userData.name,
          uid: credentials.user.uid,
        })
      })
      .then(() => {
        navigate(from, { replace: true })
      })
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
