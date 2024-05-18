import { CreateWatchlistForm } from "../../features/CreateWatchlist/ui/CreateWatchlistForm"
import "./CreateWatchlistPage.scss"

type CreateWatchlistPageTypes = {
  className?: string
}
const CreateWatchlistPage: React.FC<CreateWatchlistPageTypes> = ({
  className,
}: CreateWatchlistPageTypes) => {
  return (
    <div className={`create-watchlist-page ${className}`}>
      <h4 className="create-watchlist-page__title">Create a new watchlist</h4>
      <CreateWatchlistForm />
    </div>
  )
}

export default CreateWatchlistPage
