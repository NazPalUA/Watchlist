import { doc, setDoc } from "firebase/firestore"
import { useLocation, useNavigate } from "react-router-dom"
import { signUpWithEmail } from "../../../services/firebase/auth/firebase-auth"
import { db } from "../../../services/firebase/firebase-config"
import { TSignUpSchema, signUpSchema } from "../../../types/form-signup"
import { getForm } from "../../Form"

type EmailSignUpProps = {}

export default function EmailSignUp({}: EmailSignUpProps) {
  let navigate = useNavigate()
  let location = useLocation()
  let from = location.state?.from?.pathname || "/"

  const handleSubmit = (data: TSignUpSchema) => {
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

  const Form = getForm<TSignUpSchema>()
  return (
    <Form onSubmit={handleSubmit} schema={signUpSchema}>
      <Form.Field name="name">Name</Form.Field>
      <Form.Field name="email">Email</Form.Field>
      <Form.Field name="password" type="password">
        Password
      </Form.Field>
      <Form.Field name="confirmPassword" type="password">
        Confirm password
      </Form.Field>
      <Form.SubmitButton>Sign up</Form.SubmitButton>
    </Form>
  )
}
