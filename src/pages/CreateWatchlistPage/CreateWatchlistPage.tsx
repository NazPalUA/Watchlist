import { CreateWatchlistForm } from "../../features/CreateWatchlist/ui/CreateWatchlistForm"

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
