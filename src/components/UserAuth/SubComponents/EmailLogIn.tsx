import { useLocation, useNavigate } from "react-router-dom"
import { signInWithEmail } from "../../../services/firebase/auth/firebase-auth"
import { TLogInSchema, logInSchema } from "../../../types/form-login"
import { getForm } from "../../Form"

type EmailLogInProps = {}

export default function EmailLogIn({}: EmailLogInProps) {
  let navigate = useNavigate()
  let location = useLocation()
  let from = location.state?.from?.pathname || "/"

  const handleSubmit = (data: TLogInSchema) => {
    signInWithEmail(data.email, data.password).then(() => {
      navigate(from, { replace: true })
    })
  }
  const Form = getForm<TLogInSchema>()
  return (
    <Form onSubmit={handleSubmit} schema={logInSchema}>
      <Form.Field name="email">Email</Form.Field>
      <Form.Field name="password" type="password">
        Password
      </Form.Field>
      <Form.SubmitButton>Log In</Form.SubmitButton>
    </Form>
  )
}
