"use client"

import { useSessionQuery } from "../../../entities/session"
import { useEditUserData, useGetUserDataQuery } from "../../../entities/user"
import { getForm } from "../../../shared/ui/Form"

import { TUserSchema, userSchema } from "./model/userSchema"

type UserSettingsFormProps = {}

export function UserSettingsForm({}: UserSettingsFormProps) {
  const { data: user } = useSessionQuery()
  const userId = user?.uid
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
