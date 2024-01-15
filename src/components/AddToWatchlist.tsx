import { useEffect, useState } from "react"
import Select from 'react-select'
import { StylesConfig } from 'react-select'
import { useWatchlistsContext } from "../context/WatchlistsContext"
import { useHistoryContext } from "../context/HistoryContext"
import { useModalContext } from "../context/ModalContext"
import "./AddToWatchlist.scss"

type OptionType = {
    value: string,
    label: string
}

type SelectedOptionType = OptionType | null

export default function AddToWatchlist() {
    const { watchlistsArr, addMovieToWatchlist } = useWatchlistsContext()
    const { isModalActive, setIsModalActive, movieId } = useModalContext()
    const { addToHistory } = useHistoryContext()

    const [selectedOption, setSelectedOption] = useState<SelectedOptionType>(null)
    const [selectedIds, setSelectedIds] = useState({ watchlist: "", movie: "" })

    // Effect to reset selected option when modal is closed
    useEffect(() => { !isModalActive && setSelectedOption(null) }, [isModalActive])

    // Create array of options for Select
    const optionsArr: OptionType[] = watchlistsArr.map(watchlist => (
        { value: watchlist.id, label: watchlist.name }
    ))

    // Handler for changing selected option
    function handleChange(selectedOption: SelectedOptionType) {
        setSelectedOption(selectedOption)
        if (selectedOption) {
            setSelectedIds({
                watchlist: selectedOption.value,
                movie: movieId
            })
        }
    }

    // Handler for clicking save button
    function handleSave() {
        addMovieToWatchlist(selectedIds.movie, selectedIds.watchlist)
        setIsModalActive(false)
        addToHistory(movieId)
    }

    // Styles for Select
    const colorStyles: StylesConfig<OptionType, false> = {
        // control: styles => ({
        //     ...styles,
        //     backgroundColor: "red",
        //     color: "red"
        // }),
        option: (styles, { isFocused }) => ({
            ...styles,
            padding: "15px",
            backgroundColor: isFocused ? "#1F1F1F" : styles.backgroundColor,
            color: isFocused ? "#fff" : "#000"
        }),
        multiValue: (styles) => ({
            ...styles,
            backgroundColor: "#ECBFC0",
            padding: "0.3em 0 0.3em 0.5em",
            fontSize: "1.2rem"

        }),
        multiValueLabel: (styles) => ({
            ...styles,
            color: "#141414",
            fontWeight: "600"
        }),
        multiValueRemove: (styles) => ({
            ...styles,
            color: "#141414",
            cursor: "pointer",
            paddingRight: "0.5em",
            ":hover": {
                color: "#fff"
            }
        })
    }

    return (
        <div className="add-to-list">
            <p className="add-to-list__top-text">Select Watchlist</p>
            <Select
                // defaultValue={optionsArr[0]}
                value={selectedOption}
                options={optionsArr}
                onChange={handleChange}
                styles={colorStyles}
                isSearchable={false}
            />
            <div className="add-to-list__btn-container">
                <button
                    className="add-to-list__btn"
                    onClick={() => setIsModalActive(false)}
                >
                    Cancel
                </button>
                <button
                    className="add-to-list__btn"
                    onClick={() => handleSave()}
                    disabled={!selectedOption}
                >
                    Save
                </button>
            </div>
        </div>
    )
}