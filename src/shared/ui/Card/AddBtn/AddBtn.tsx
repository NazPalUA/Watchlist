"use client"

import { useModalContext } from "../../../context"
import styles from "./AddBtn.module.scss"

export type AddBtnProps = React.ComponentPropsWithoutRef<"button"> & {
  movieId: string | number | undefined
}

export default function AddBtn({ className, movieId, ...rest }: AddBtnProps) {
  const { setIsModalActive, setMovieId } = useModalContext()

  return (
    <button
      className={styles.addBtn}
      onClick={e => {
        if (movieId) {
          e.preventDefault()
          e.stopPropagation()
          setIsModalActive(true)
          setMovieId(movieId.toString())
        }
      }}
      {...rest}
    />
  )
}
