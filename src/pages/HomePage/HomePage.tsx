import { SearchBox } from "../../features/Search"
import { PopularMovies } from "../../widgets/PopularMovies"
import Welcome from "../../widgets/Welcome"
import styles from "./HomePage.module.scss"

type HomePagePropTypes = {
  className?: string
}

function HomePage({ className }: HomePagePropTypes) {
  return (
    <div className={`${className}`}>
      <Welcome className={styles.welcome} />
      <SearchBox className={styles.search} />
      <PopularMovies />
    </div>
  )
}

export default HomePage
