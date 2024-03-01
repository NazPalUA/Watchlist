import { useEffect, useState } from "react"
import { useHistoryContext } from "../../context/HistoryContext"
import { useModalContext } from "../../context/ModalContext"
import { useUser } from "../../context/UserContext"
import { useAddMovieToWatchlistMutation } from "../../services/firebase/firestore/mutations"
import { useGetWatchlistsDataQuery } from "../../services/firebase/firestore/queries"
import styles from "./AddToWatchlistModal.module.scss"
import CustomSelect from "./SubComponents/CustomSelect/CustomSelect"

type OptionType = {
  value: string
  label: string
}

type SelectedOptionType = OptionType | null

export default function AddToWatchlistModal() {
  const { isModalActive, setIsModalActive, movieId } = useModalContext()
  const { addToHistory } = useHistoryContext()

  const [selectedOption, setSelectedOption] = useState<SelectedOptionType>(null)
  const [selectedIds, setSelectedIds] = useState({ watchlist: "", movie: "" })

  const { user } = useUser()
  const userId = user?.uid
  if (!userId) return <div>Not logged in</div>

  const { data: watchlistsData } = useGetWatchlistsDataQuery(userId)
  const { mutate: addMovieToWatchlist } = useAddMovieToWatchlistMutation(
    userId,
    selectedIds.watchlist
  )

  // Effect to reset selected option when modal is closed
  useEffect(() => {
    !isModalActive && setSelectedOption(null)
  }, [isModalActive])

  // Create array of options for Select
  const optionsArr = watchlistsData?.map((watchlist) => ({
    value: watchlist.id,
    label: watchlist.name,
  }))

  // Handler for changing selected option
  function handleChange(selectedOption: SelectedOptionType) {
    setSelectedOption(selectedOption)
    if (selectedOption) {
      setSelectedIds({
        watchlist: selectedOption.value,
        movie: movieId,
      })
    }
  }

  // Handler for clicking save button
  function handleSave() {
    addMovieToWatchlist(selectedIds.movie)
    setIsModalActive(false)
    addToHistory(movieId)
  }

  return (
    <div
      className={`${styles.container} ${isModalActive ? styles.active : ""}`}
      onClick={() => setIsModalActive(false)}
    >
      <div
        className={`${styles.modal} ${isModalActive ? styles.active : ""}`}
        onClick={(e) => e.stopPropagation()}
      >
        <p className={styles.header}>Select Watchlist</p>
        <CustomSelect
          value={selectedOption}
          options={optionsArr}
          onChange={handleChange}
        />
        <div className={styles.btnContainer}>
          <button
            className={styles.btn}
            onClick={() => setIsModalActive(false)}
          >
            Cancel
          </button>
          <button
            className={styles.btn}
            onClick={() => handleSave()}
            disabled={!selectedOption}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  )
}
