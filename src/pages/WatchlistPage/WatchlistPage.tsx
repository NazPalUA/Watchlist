import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import CustomLoader from "../../components/CustomLoader"
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage"
import { Watchlist, useWatchlist } from "../../context/WatchlistsContext"
import { useMoviesDetails } from "../../services/tmdb"
import Movies from "./SubComponents/Movies"
import WatchlistDetails from "./SubComponents/WatchlistDetails"
import "./WatchlistPage.scss"

type WatchlistPagePropTypes = {
  className?: string
}

function WatchlistPage({ className }: WatchlistPagePropTypes) {
  const { watchlistId } = useParams()
  if (!watchlistId) return null

  const [movieIds, setMovieIds] = useState<string[]>([])
  const [watchlistData, setWatchlistData] = useState<Watchlist>()

  const { getMovieIds, getWatchlistData } = useWatchlist()

  useEffect(() => {
    const fetchData = async () => {
      const watchlistData = await getWatchlistData(watchlistId)
      setWatchlistData(watchlistData)

      const movieIds = await getMovieIds(watchlistId)
      setMovieIds(movieIds)
    }

    fetchData()
  }, [watchlistId])

  const { data, isError, error, isLoading } = useMoviesDetails(movieIds)

  if (isLoading) return <CustomLoader />

  if (!watchlistId) return <ErrorMessage>Watchlist not found!</ErrorMessage>

  if (isError || !data)
    return (
      <ErrorMessage error={error}>
        Something went wrong! Please try again later.
      </ErrorMessage>
    )

  return (
    <div className={`watchlist-page ${className}`}>
      <WatchlistDetails
        moviesData={data}
        name={watchlistData?.name ?? ""}
        description={watchlistData?.description ?? ""}
      />
      <Movies moviesData={data} />
    </div>
  )
}

export default WatchlistPage
