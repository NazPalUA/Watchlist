import { getForm } from "../../../components/Form"
import { useUpdateDisplayNameMutation } from "../../../services/firebase/auth/mutations"
import { useGetUserQuery } from "../../../services/firebase/auth/queries"
import { TUserSchema, userSchema } from "../../../types/form-user"

type EditUserFormProps = {}

export default function EditUserForm({}: EditUserFormProps) {
  const { data: user } = useGetUserQuery()

  const { mutate: updateUserName, isPending } = useUpdateDisplayNameMutation()

  // Handle form submission
  const handleSubmit = async (data: TUserSchema) => {
    updateUserName(data.name)
  }

  const Form = getForm<TUserSchema>()
  if (user)
    return (
      <Form
        onSubmit={handleSubmit}
        schema={userSchema}
        defaultValues={{
          name: isPending || !user.displayName ? undefined : user.displayName,
        }}
      >
        <Form.Field name="name">Name</Form.Field>
        <Form.SubmitButton isSubmitting={isPending}>Save</Form.SubmitButton>
      </Form>
    )
}
