"use client"

import { FC, ReactNode, createContext, useContext, useState } from "react"

type ModalContextType = {
  isModalActive: boolean
  setIsModalActive: (value: boolean) => void
  movieId: string
  setMovieId: (id: string) => void
}

const ModalContext = createContext<ModalContextType | null>(null)

type ModalContextProviderProps = {
  children: ReactNode
}

const ModalContextProvider: FC<ModalContextProviderProps> = ({ children }) => {
  // set initial state values
  const [isModalActive, setIsModalActive] = useState(false)
  const [movieId, setMovieId] = useState("")

  return (
    <ModalContext.Provider
      value={{
        isModalActive,
        setIsModalActive,
        movieId,
        setMovieId,
      }}
    >
      {children}
    </ModalContext.Provider>
  )
}

export const useModalContext = () => {
  const context = useContext(ModalContext)
  if (!context) {
    throw new Error(
      "useModalContext must be used within a ModalContextProvider"
    )
  }
  return context
}

export { ModalContextProvider }
