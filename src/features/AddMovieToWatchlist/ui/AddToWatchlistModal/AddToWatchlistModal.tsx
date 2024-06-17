"use client"

import { useEffect, useState } from "react"
import {
  useAddMovieToWatchlistMutation,
  useGetWatchlistsQuery,
} from "../../../../entities/watchlist"
import { useHistoryContext, useModalContext } from "../../../../shared/context"
import { PopUp } from "../../../../shared/ui/PopUp"
import CustomSelect from "../CustomSelect/CustomSelect"
import styles from "./AddToWatchlistModal.module.scss"

type OptionType = {
  value: string
  label: string
}

type SelectedOptionType = OptionType | null

export function AddToWatchlistModal() {
  const { isModalActive, setIsModalActive, movieId } = useModalContext()
  const { addToHistory } = useHistoryContext()

  const [selectedOption, setSelectedOption] = useState<SelectedOptionType>(null)
  const [selectedIds, setSelectedIds] = useState({ watchlist: "", movie: "" })

  const { data: watchlistsData } = useGetWatchlistsQuery()
  const { mutate: addMovieToWatchlist } = useAddMovieToWatchlistMutation(
    selectedIds.watchlist
  )

  // Effect to reset selected option when modal is closed
  useEffect(() => {
    !isModalActive && setSelectedOption(null)
  }, [isModalActive])

  // Create array of options for Select
  const optionsArr = watchlistsData?.map(watchlist => ({
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
    <PopUp
      isShowing={isModalActive}
      closeOnEmptyClick={true}
      setIsShowing={setIsModalActive}
    >
      <p className={styles.header}>Select Watchlist</p>
      <CustomSelect
        value={selectedOption}
        options={optionsArr}
        onChange={handleChange}
      />
      <div className={styles.btnContainer}>
        <button className={styles.btn} onClick={() => setIsModalActive(false)}>
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
    </PopUp>
  )
}
