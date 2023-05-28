import { useState, FC, ReactNode, createContext } from "react"

export type ModalContextType = {
    isModalActive: boolean,
    setIsModalActive: (value: boolean) => void,
    movieId: string,
    setMovieId: (id: string) => void
}

const ModalContext = createContext<ModalContextType | null>(null)

type ModalContextProviderProps = {
    children: ReactNode
}

const ModalContextProvider: FC<ModalContextProviderProps> = ({children}) => {
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