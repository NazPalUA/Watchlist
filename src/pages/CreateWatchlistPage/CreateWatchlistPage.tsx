import { nanoid } from "nanoid"
import { ChangeEvent, FormEvent, useState } from "react"
import { useNavigate } from "react-router-dom"
import { useUser } from "../../context/UserContext"
import { useCreateWatchlistMutation } from "../../services/firebase/firestore/mutations"
import "./CreateWatchlistPage.scss"

type CreateWatchlistPageTypes = {
  className?: string
}
const CreateWatchlistPage: React.FC<CreateWatchlistPageTypes> = ({
  className,
}: CreateWatchlistPageTypes) => {
  // Use the useNavigate hook from react-router to navigate to another page
  const navigate = useNavigate()

  // Form state to store the name and description of the new watchlist
  const [formData, setFormData] = useState({
    name: "",
    description: "",
  })

  const { user } = useUser()
  const userId = user?.uid
  if (!userId) return <div>Not logged in</div>

  const { mutate: createWatchlist } = useCreateWatchlistMutation(userId)

  // Function to handle changes in the form
  function handleChange(
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = event.target
    setFormData((prevWatchlistData) => ({
      ...prevWatchlistData,
      [name]: value,
    }))
  }

  // Function to handle the submit event of the form
  function handleSubmit(event: FormEvent) {
    event.preventDefault()

    // Generate a unique identifier for the new watchlist
    const watchlistId = nanoid()

    // Call the createWatchlist function to add a new watchlist
    createWatchlist(formData)

    // Navigate to the page with the new watchlist using useNavigate
    navigate(`/watchlist-page/${watchlistId}`)
  }

  return (
    <div className={`create-watchlist-page ${className}`}>
      <h4 className="create-watchlist-page__title">Create a new watchlist</h4>
      <form className="create-watchlist-page__form" onSubmit={handleSubmit}>
        <label className="create-watchlist-page__label" htmlFor="name">
          Name
        </label>
        <input
          className="create-watchlist-page__name"
          type="text"
          id="name"
          placeholder=""
          onChange={handleChange}
          name="name"
          required
          value={formData.name}
        />
        <label className="create-watchlist-page__label" htmlFor="description">
          Description
        </label>
        <textarea
          className="create-watchlist-page__description"
          id="description"
          placeholder=""
          onChange={handleChange}
          name="description"
          value={formData.description}
        />
        <button className="create-watchlist-page__btn">Create watchlist</button>
      </form>
    </div>
  )
}

export default CreateWatchlistPage
