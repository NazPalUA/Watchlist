import { Link, useNavigate } from "react-router-dom"
import { getForm } from "../../../../components/Form"
import { useEditWatchlistMutation } from "../../../../services/firebase/firestore/mutations"
import { useGetWatchlistDataQuery } from "../../../../services/firebase/firestore/queries"
import {
  TWatchlistSchema,
  watchlistSchema,
} from "../../../../types/form-watchlist"
import styles from "./EditWatchlistForm.module.scss"

type EditWatchlistFormProps = { watchlistId: string }

export default function EditWatchlistForm({
  watchlistId,
}: EditWatchlistFormProps) {
  const { data: watchlistData } = useGetWatchlistDataQuery(watchlistId)

  const { mutate: editWatchlist } = useEditWatchlistMutation(watchlistId)

  // Get the navigation function from react-router-dom
  const navigate = useNavigate()

  function handleSubmit(data: TWatchlistSchema) {
    editWatchlist(data)
    // Navigate to the watchlist page
    navigate(`/watchlist-page/${watchlistId}`)
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
          to={`/watchlist-page/${watchlistId}`}
          className={`${styles.btn} ${styles.btn_dark}`}
        >
          Back
        </Link>
        <Form.SubmitButton>Save</Form.SubmitButton>
      </div>
    </Form>
  )
}
