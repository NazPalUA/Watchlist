import { getForm } from "../../../components/Form"
import { useGetUserQuery } from "../../../services/firebase/auth/queries"
import { useEditUserData } from "../../../services/firebase/firestore/mutations/mutations"
import { useGetUserDataQuery } from "../../../services/firebase/firestore/queries/queries"
import { TUserSchema, userSchema } from "../../../types/form-user"

type EditUserFormProps = {}

export default function EditUserForm({}: EditUserFormProps) {
  const { data: user } = useGetUserQuery()
  const { data: userData } = useGetUserDataQuery()

  const { mutate: updateUserName, isPending } = useEditUserData()

  // Handle form submission
  const handleSubmit = async (data: TUserSchema) => {
    updateUserName({ name: data.name })
  }

  const Form = getForm<TUserSchema>()

  return user ? (
    <Form
      onSubmit={handleSubmit}
      schema={userSchema}
      defaultValues={{
        name: userData?.name,
      }}
    >
      <Form.Field name="name">Name</Form.Field>
      <Form.SubmitButton isSubmitting={isPending}>Save</Form.SubmitButton>
    </Form>
  ) : null
}
