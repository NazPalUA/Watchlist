import { useGetUserQuery } from "../../../entities/session/api/queries/hooks"
import { useEditUserData } from "../../../entities/user/api/mutations/hooks"
import { useGetUserDataQuery } from "../../../entities/user/api/queries/hooks"
import { getForm } from "../../../shared/ui/Form"

import { TUserSchema, userSchema } from "../../../entities/user/model/form-user"

type EditUserFormProps = {}

export default function EditUserForm({}: EditUserFormProps) {
  const { data: user } = useGetUserQuery()
  const { data: currentUser } = useGetUserQuery()
  const userId = currentUser?.uid
  const { data: userData } = useGetUserDataQuery(userId)

  const { mutate: updateUserName, isPending } = useEditUserData()

  // Handle form submission
  const handleSubmit = async (data: TUserSchema) => {
    if (!userId) throw new Error("User ID is required")
    updateUserName({ userId, data })
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
