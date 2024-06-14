import Link from "next/link"
import { useRouter } from "next/router"
import {
  TWatchlistSchema,
  useEditWatchlistMutation,
  useGetSingleWatchlistQuery,
  watchlistSchema,
} from "../../../../entities/watchlist"
import { getForm } from "../../../../shared/ui/Form"
import styles from "./EditWatchlistForm.module.scss"

type EditWatchlistFormProps = { watchlistId: string }

export function EditWatchlistForm({ watchlistId }: EditWatchlistFormProps) {
  const { data: watchlistData } = useGetSingleWatchlistQuery(watchlistId)

  const { mutate: editWatchlist } = useEditWatchlistMutation(watchlistId)

  const router = useRouter()

  function handleSubmit(data: TWatchlistSchema) {
    editWatchlist(data)
    // Navigate to the watchlist page
    router.push(`/watchlists/${watchlistId}`)
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
          href={`/watchlists/${watchlistId}`}
          className={`${styles.btn} ${styles.btn_dark}`}
        >
          Back
        </Link>
        <Form.SubmitButton>Save</Form.SubmitButton>
      </div>
    </Form>
  )
}
