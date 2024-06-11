import { doc, setDoc } from "firebase/firestore"
import { useAuthWithEmailAndPasswordMutation } from "../../../entities/session"
import { db } from "../../../shared/API_ref/firebase-config"
import { getForm } from "../../../shared/UI_ref/Form"
import { TSignUpSchema, signUpSchema } from "../model/form-signup"

type EmailSignUpProps = {}

export default function EmailSignUp({}: EmailSignUpProps) {
  const { mutate: authenticate } = useAuthWithEmailAndPasswordMutation()

  const handleSubmit = (data: TSignUpSchema) => {
    const { confirmPassword, ...userData } = data // remove confirmPassword from the data

    authenticate(
      { email: userData.email, password: userData.password, type: "signUp" },
      {
        onSuccess(data) {
          const docRef = doc(db, "users", data.uid)
          setDoc(docRef, {
            email: userData.email,
            name: userData.name,
            uid: data.uid,
          })
        },
      }
    )
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
