import React from "react"
import Select from 'react-select';
import "./AddToWatchlist.scss"

export default function AddToWatchlist() {
    const watchlistsArr = [
        { value: 'caramel', label: 'Salted Caramel'},
        { value: 'chocqrolate', label: 'Choco r late'},
        { value: 'chowcolate', label: 'Choco r late'},
        { value: 'chocqolate', label: 'Choco r late'},
        { value: 'chohcolate', label: 'Choco r late'},
        { value: 'chocgolate', label: 'Choco r late'},
        { value: 'cho4colate', label: 'Choco r late'},
        { value: 'chorcolate', label: 'Choco r late'},
        { value: 'e', label: 'Choco r late'}
    ]
    return(
        <>
            <p style={{color: "black"}}>Add Top Gun: Maverick to </p>
            <Select
                defaultValue={watchlistsArr[2]}
                options={watchlistsArr}

            />
            <button style={{color: "black"}}>save</button>
            <button style={{color: "black"}}>cancel</button>
        </>
    )
}