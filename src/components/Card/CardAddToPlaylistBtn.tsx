import { useModalContext } from "../../context/ModalContext"
import { useGetUserQuery } from "../../services/firebase/auth/queries"

export type CardAddToPlaylistBtnProps =
  React.ComponentPropsWithoutRef<"button"> & {
    movieId: string | number | undefined
  }

export default function CardAddToPlaylistBtn({
  className,
  movieId,
  ...rest
}: CardAddToPlaylistBtnProps) {
  const { setIsModalActive, setMovieId } = useModalContext()
  const { data: currentUser } = useGetUserQuery()
  if (!currentUser) return null

  return (
    <button
      className="card__add-to-playlist-btn"
      onClick={(e) => {
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
