import { useEffect, useState } from "react"
import { useHistoryContext } from "../../context/HistoryContext"
import { useModalContext } from "../../context/ModalContext"
import { WatchlistsData, useWatchlist } from "../../context/WatchlistsContext"
import styles from "./AddToWatchlistModal.module.scss"
import CustomSelect from "./SubComponents/CustomSelect/CustomSelect"

type OptionType = {
  value: string
  label: string
}

type SelectedOptionType = OptionType | null

export default function AddToWatchlistModal() {
  const [watchlistsArr, setWatchlistsArr] = useState<WatchlistsData>([])
  const { addMovieToWatchlist, getWatchlistsData } = useWatchlist()
  const { isModalActive, setIsModalActive, movieId } = useModalContext()
  const { addToHistory } = useHistoryContext()

  const [selectedOption, setSelectedOption] = useState<SelectedOptionType>(null)
  const [selectedIds, setSelectedIds] = useState({ watchlist: "", movie: "" })

  useEffect(() => {
    const fetchData = async () => {
      const watchlistsData = await getWatchlistsData()
      setWatchlistsArr(watchlistsData)
    }

    fetchData()
  }, [])

  // Effect to reset selected option when modal is closed
  useEffect(() => {
    !isModalActive && setSelectedOption(null)
  }, [isModalActive])

  // Create array of options for Select
  const optionsArr = watchlistsArr.map((watchlist) => ({
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
    addMovieToWatchlist({
      movieId: selectedIds.movie,
      watchlistId: selectedIds.watchlist,
    })
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
