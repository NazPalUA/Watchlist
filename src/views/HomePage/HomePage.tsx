import { Suspense } from "react"
import { SearchBox } from "../../features/Search"
import Welcome from "../../shared/ui/Welcome"
import { PopularMovies } from "../../widgets/PopularMovies"
import styles from "./HomePage.module.scss"

type HomePagePropTypes = {
  className?: string
}

function HomePage({ className }: HomePagePropTypes) {
  return (
    <div className={`${className}`}>
      <Welcome className={styles.welcome} />
      <Suspense fallback={<div>Loading search box...</div>}>
        <SearchBox className={styles.search} />
      </Suspense>
      <PopularMovies />
    </div>
  )
}

export default HomePage
