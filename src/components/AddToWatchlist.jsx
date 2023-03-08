import React, { useContext, useEffect, useState } from "react"
import Select from 'react-select';
import { useNavigate } from "react-router-dom";
import { WatchlistsContext } from "../context/WatchlistsContext"
import { HistoryContext } from "../context/HistoryContext"
import { ModalContext } from "../context/ModalContext"
import "./AddToWatchlist.scss"

export default function AddToWatchlist(props) {

    const {watchlistsArr, addMovieToWatchlist} = useContext(WatchlistsContext)
    const {isModalActive, setIsModalActive, movieId} = useContext(ModalContext)
    const {addToHistory} = useContext(HistoryContext)

    const navigate = useNavigate()

    const [selectedOption, setSelectedOption] = useState(null);

    const optionsArr = watchlistsArr.map(watchlist => {
        return { value: watchlist.id, label: watchlist.name}
    })

    const [selectedIds, setSelectedIds] = useState({watchlist: "", movie: ""})

    useEffect(()=>{
        !isModalActive && setSelectedOption(null)
    },[isModalActive])

    const handleChange = (selectedOption) => {
        setSelectedOption(selectedOption)
        setSelectedIds({
            watchlist: selectedOption.value, 
            movie: movieId
        }) 
    }

    function closeModal() {
        setIsModalActive(false)
    }

    function handleSave() {
        addMovieToWatchlist(selectedIds.movie, selectedIds.watchlist)
        setIsModalActive(false)
        addToHistory(movieId)
        // navigate(`/watchlist-page/${selectedIds.watchlist}`)
    }

    const colorStyles = {
        control: styles => ({
            ...styles,
            // backgroundColor: "red",
            // color: "red"
        }),
        option: (styles, { data, isDisabled, isFocused, isSelected }) => {
            // console.log("option", styles, data, isDisabled, isFocused, isSelected)
            return ({
                ...styles,
                padding: "15px",
                backgroundColor: isFocused ? "#1F1F1F" : styles.backgroundColor,
                color: isFocused ? "#fff" : "#000"
            })
        },
        multiValue: (styles, {data}) => {
            return {
                ...styles,
                backgroundColor: "#ECBFC0",
                padding: "0.3em 0 0.3em 0.5em",
                fontSize: "1.2rem"

            }
        },
        multiValueLabel: (styles, {data}) => {
            return {
                ...styles,
                color: "#141414",
                fontWeight: "600"
            }
        },
        multiValueRemove: (styles, {data}) => {
            return {
                ...styles,
                color: "#141414",
                cursor: "pointer",
                paddingRight: "0.5em",
                ":hover": {
                    color: "#fff"
                }
            }
        },

    }


    return(
        <div className="add-to-list">
            <p className="add-to-list__top-text">Select Watchlist(s)</p>
            <Select
                // defaultValue={optionsArr[0]}
                value={selectedOption}
                options={optionsArr}
                onChange={handleChange}
                // isMulti
                styles={colorStyles}
                isSearchable={false}

            />
            <div className="add-to-list__btn-container">
                <button 
                    className="add-to-list__btn" 
                    onClick={()=>closeModal()}
                >
                    Cancel
                </button>
                <button 
                    className="add-to-list__btn" 
                    onClick={()=>handleSave()}
                    disabled={!selectedOption}
                >
                    Save
                </button>
            </div>
        </div>
    )
}