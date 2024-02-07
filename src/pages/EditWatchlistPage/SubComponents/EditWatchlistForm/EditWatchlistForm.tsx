import { ChangeEvent, FormEvent, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { useWatchlistsContext } from "../../../../context/WatchlistsContext"
import { useMoviesDetails } from "../../../../services/tmdb"
import WatchlistMovies from "../WatchlistMovies/WatchlistMovies"
import styles from "./EditWatchlistForm.module.scss"

type FormData = {
  name: string | undefined
  description: string | undefined
}

type EditWatchlistFormProps = { watchlistId: string }

export default function EditWatchlistForm({
  watchlistId,
}: EditWatchlistFormProps) {
  const { getWatchlistData, editWatchlist, getMovieIds } =
    useWatchlistsContext()

  // Get the navigation function from react-router-dom
  const navigate = useNavigate()

  // Get the copy of current movieIds and their data using the custom hook
  const [movieIds, setMovieIds] = useState(getMovieIds(watchlistId) || [])
  const { data: moviesData } = useMoviesDetails(movieIds)

  // Get the current watchlist's name and description as initial values for the form
  const [formData, setFormData] = useState<FormData>({
    name: getWatchlistData(watchlistId)?.name,
    description: getWatchlistData(watchlistId)?.description,
  })

  // Handle changes to the form inputs
  function handleChange(
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = event.target
    // Update the formData based on the input's name and type
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }))
  }

  function handleSubmit(event: FormEvent) {
    event.preventDefault()
    if (formData.name && watchlistId) {
      // Save the performed changes to the watchlist's name, description and movieIds
      editWatchlist(formData.name, formData.description, movieIds, watchlistId)
      // Navigate to the watchlist page
      navigate(`/watchlist-page/${watchlistId}`)
    }
  }

  // Delete a movieId from the current watchlist
  function delateMovieId(e: React.MouseEvent, movieId: string) {
    e.preventDefault()
    if (watchlistId) {
      setMovieIds((prevMovieIds) => prevMovieIds.filter((id) => id !== movieId))
    }
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <label className={styles.label} htmlFor="name">
        Name
      </label>
      <input
        className={styles.title}
        type="text"
        id="name"
        placeholder=""
        onChange={handleChange}
        name="name"
        value={formData.name}
      />
      <label className={styles.label} htmlFor="description">
        Description
      </label>
      <textarea
        className={styles.description}
        id="description"
        placeholder=""
        onChange={handleChange}
        name="description"
        value={formData.description}
      />
      {moviesData && (
        <WatchlistMovies
          delateMovieId={delateMovieId}
          moviesData={moviesData}
        />
      )}
      <div className={styles.btnsContainer}>
        <Link
          to={`/watchlist-page/${watchlistId}`}
          className={`${styles.btn} ${styles.btn_dark}`}
        >
          Back
        </Link>
        <button className={styles.btn}>Save</button>
      </div>
    </form>
  )
}
