import { Link, useNavigate } from "react-router-dom"
import {
  TWatchlistSchema,
  useEditWatchlistMutation,
  useGetSingleWatchlistQuery,
  watchlistSchema,
} from "../../../../entities/watchlist"
import { getForm } from "../../../../shared/UI_ref/Form"
import styles from "./EditWatchlistForm.module.scss"

type EditWatchlistFormProps = { watchlistId: string }

export function EditWatchlistForm({ watchlistId }: EditWatchlistFormProps) {
  const { data: watchlistData } = useGetSingleWatchlistQuery(watchlistId)

  const { mutate: editWatchlist } = useEditWatchlistMutation(watchlistId)

  // Get the navigation function from react-router-dom
  const navigate = useNavigate()

  function handleSubmit(data: TWatchlistSchema) {
    editWatchlist(data)
    // Navigate to the watchlist page
    navigate(`/watchlists/${watchlistId}`)
  }

  const Form = getForm<TWatchlistSchema>()
  return (
    <Form
      onSubmit={handleSubmit}
      schema={watchlistSchema}
      style={{ maxWidth: "unset" }}
      defaultValues={watchlistData || undefined}
    >
      <Form.Field name="name">Name</Form.Field>
      <Form.Field name="description" type="textarea">
        Description
      </Form.Field>
      <div className={styles.btnsContainer}>
        <Link
          to={`/watchlists/${watchlistId}`}
          className={`${styles.btn} ${styles.btn_dark}`}
        >
          Back
        </Link>
        <Form.SubmitButton>Save</Form.SubmitButton>
      </div>
    </Form>
  )
}
