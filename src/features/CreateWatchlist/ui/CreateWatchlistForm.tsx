import { useNavigate } from "react-router-dom"
import { getForm } from "../../../components/Form"
import { useCreateWatchlistMutation } from "../../../entities/watchlist/api/mutations/hooks"
import {
  TWatchlistSchema,
  watchlistSchema,
} from "../../../shared/types/form-watchlist"

type CreateWatchlistFormProps = {}

export function CreateWatchlistForm({}: CreateWatchlistFormProps) {
  // Use the useNavigate hook from react-router to navigate to another page
  const navigate = useNavigate()

  const { mutate: createWatchlist } = useCreateWatchlistMutation()

  // Function to handle the submit event of the form
  function handleSubmit(data: TWatchlistSchema) {
    // Call the createWatchlist function to add a new watchlist
    createWatchlist(data, {
      onSuccess: (watchlistId) => {
        navigate(`/watchlist-page/${watchlistId}`)
      },
    })
  }
  const Form = getForm<TWatchlistSchema>()
  return (
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
  )
}
