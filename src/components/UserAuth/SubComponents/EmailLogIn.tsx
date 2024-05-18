import { useAuthWithEmailAndPasswordMutation } from "../../../entities/session/api/mutations/hooks"
import { TLogInSchema, logInSchema } from "../../../shared/types/form-login"
import { getForm } from "../../Form"

type EmailLogInProps = {}

export default function EmailLogIn({}: EmailLogInProps) {
  const { mutate: authenticate } = useAuthWithEmailAndPasswordMutation()

  const handleSubmit = (data: TLogInSchema) =>
    authenticate({ email: data.email, password: data.password, type: "signIn" })

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
