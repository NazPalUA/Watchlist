"use client"

import { useRouter } from "next/navigation"
import {
  TWatchlistSchema,
  useCreateWatchlistMutation,
  watchlistSchema,
} from "../../../entities/watchlist"
import { getForm } from "../../../shared/ui/Form"
import FormTitle from "./FormTitle/FormTitle"

type CreateWatchlistFormProps = {}

export function CreateWatchlistForm({}: CreateWatchlistFormProps) {
  const router = useRouter()

  const { mutate: createWatchlist } = useCreateWatchlistMutation()

  // Function to handle the submit event of the form
  function handleSubmit(data: TWatchlistSchema) {
    // Call the createWatchlist function to add a new watchlist
    createWatchlist(data, {
      onSuccess: watchlistId => {
        router.push(`/watchlists/${watchlistId}`)
      },
    })
  }
  const Form = getForm<TWatchlistSchema>()
  return (
    <>
      <FormTitle />
      <Form
        onSubmit={handleSubmit}
        schema={watchlistSchema}
        style={{ maxWidth: "unset" }}
      >
        <Form.Field name="name">Name</Form.Field>
        <Form.Field name="description" type="textarea">
          Description
        </Form.Field>
        <Form.SubmitButton>Create watchlist</Form.SubmitButton>
      </Form>
    </>
  )
}
