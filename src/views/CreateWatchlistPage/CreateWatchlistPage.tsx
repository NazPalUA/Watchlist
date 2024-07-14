import { CreateWatchlistForm } from "../../features/CreateWatchlist"

type CreateWatchlistPageTypes = {
  className?: string
}
const CreateWatchlistPage: React.FC<CreateWatchlistPageTypes> = ({
  className,
}: CreateWatchlistPageTypes) => {
  return (
    <div className={className || ""}>
      <CreateWatchlistForm />
    </div>
  )
}

export default CreateWatchlistPage
