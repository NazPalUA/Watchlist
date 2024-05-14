import { getForm } from "../../../components/Form"
import { useGetUserDataQuery } from "../../../entities/user/api/queries/hooks"
import { useGetUserQuery } from "../../../services/firebase/auth/queries"
import { useEditUserData } from "../../../services/firebase/firestore/mutations/mutations"
import { TUserSchema, userSchema } from "../../../types/form-user"

type EditUserFormProps = {}

export default function EditUserForm({}: EditUserFormProps) {
  const { data: user } = useGetUserQuery()
  const { data: currentUser } = useGetUserQuery()
  const userId = currentUser?.uid
  const { data: userData } = useGetUserDataQuery(userId)

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
