import React from "react"
import Select from 'react-select';
import "./AddToWatchlist.scss"

export default function AddToWatchlist(props) {
    const watchlistsArr = [
        { value: 'Action films', label: 'Action films'},
        { value: 'Adventure films', label: 'Adventure films'},
        { value: 'Animated films', label: 'Animated films'},
        { value: 'Comedy films', label: 'Comedy films'},
        { value: 'Dramas', label: 'Drama'},
        { value: 'Fantasy films', label: 'Fantasy films'},
        { value: 'Historical films', label: 'Historical films'},
        { value: 'Horror films', label: 'Horror films'},
        { value: 'Musical films', label: 'Musical films'},
        { value: 'Noir films', label: 'Noir films'},
        { value: 'Romance films', label: 'Romance films'},
        { value: 'Science fiction films', label: 'Science fiction films'},
        { value: 'Thriller films', label: 'Thriller films'},
        { value: 'Westerns', label: 'Westerns'},
    ]

    function closeModal() {
        props.setModalActive(false)
    }

    const colorStyles = {
        control: styles => ({
            ...styles,
            // backgroundColor: "red",
            // color: "red"
        }),
        option: (styles, { data, isDisabled, isFocused, isSelected }) => {
            console.log("option", styles, data, isDisabled, isFocused, isSelected)
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

    const handleChange = (selectedOption) => {
        console.log(selectedOption)
    }
    return(
        <div className="add-to-list">
            <p style={{color: "black"}}>Select Watchlist(s)</p>
            <Select
                defaultValue={watchlistsArr[0]}
                options={watchlistsArr}
                onChange={handleChange}
                isMulti
                styles={colorStyles}
                isSearchable={false}

            />
            <div className="add-to-list__btn-container">
                <button className="add-to-list__btn" onClick={()=>closeModal()}>Save</button>
                <button className="add-to-list__btn" onClick={()=>closeModal()}>Cancel</button>
            </div>
        </div>
    )
}