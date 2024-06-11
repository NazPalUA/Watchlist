import { SearchBox } from "../../features/Search"
import Welcome from "../../shared/UI_ref/Welcome"
import { PopularMovies } from "../../widgets/PopularMovies"
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
