import React, { useState } from "react"

const ModalContext = React.createContext()

function ModalContextProvider({children}) {
    // set initial state values
    const [isModalActive, setIsModalActive] = useState(false)
    const [movieId, setMovieId] = useState("")

    return (
        <ModalContext.Provider value={{
            isModalActive,
            setIsModalActive,
            movieId,
            setMovieId
        }}>
            {children}
        </ModalContext.Provider>
    )
}

export {ModalContextProvider, ModalContext}