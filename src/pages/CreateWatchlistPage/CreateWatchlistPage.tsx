import { useNavigate } from "react-router-dom"
import { getForm } from "../../components/Form"
import { useCreateWatchlistMutation } from "../../services/firebase/firestore/mutations/mutations"
import { TWatchlistSchema, watchlistSchema } from "../../types/form-watchlist"
import "./CreateWatchlistPage.scss"

type CreateWatchlistPageTypes = {
  className?: string
}
const CreateWatchlistPage: React.FC<CreateWatchlistPageTypes> = ({
  className,
}: CreateWatchlistPageTypes) => {
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
    <div className={`create-watchlist-page ${className}`}>
      <h4 className="create-watchlist-page__title">Create a new watchlist</h4>
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
    </div>
  )
}

export default CreateWatchlistPage
