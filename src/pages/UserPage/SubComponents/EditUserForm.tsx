import { doc, updateDoc } from "firebase/firestore"
import { getForm } from "../../../components/Form"
import { useUser } from "../../../context/UserContext"
import { db } from "../../../services/firebase/firebase-config"
import { TUserSchema, userSchema } from "../../../types/form-user"

type EditUserFormProps = {}

export default function EditUserForm({}: EditUserFormProps) {
  const { user } = useUser()

  // Handle form submission
  const handleSubmit = async (data: TUserSchema) => {
    if (user?.uid) {
      try {
        const docRef = doc(db, "users", user.uid)
        await updateDoc(docRef, {
          name: data.name,
        })
      } catch (error) {
        console.error("Error updating document: ", error)
      }
    } else {
      console.error("No user found")
    }
  }

  const Form = getForm<TUserSchema>()
  return (
    <Form
      onSubmit={handleSubmit}
      schema={userSchema}
      defaultValues={{ name: user?.name || undefined }}
    >
      <Form.Field name="name">Name</Form.Field>
      <Form.SubmitButton>Save</Form.SubmitButton>
    </Form>
  )
}
