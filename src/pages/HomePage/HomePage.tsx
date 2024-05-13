import SearchBox from "../../components/SearchBox/SearchBox"
import Welcome from "../../shared/UI/Welcome"
import styles from "./HomePage.module.scss"
import PopularMovies from "./SubComponents/PopularMovies"

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
