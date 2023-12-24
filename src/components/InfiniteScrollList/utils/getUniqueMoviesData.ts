import { Result as Movie } from '../../../types/PopularOrSearchMoviesAPI';


export default function getUniqueMoviesData(moviesData: Movie[]) {
    const uniqueData = moviesData.reduce((acc:Movie[], item) => {
        if (!acc.find(i => i.id === item.id)) {
            acc.push(item)
        }
        return acc
    }, [])
    
    return uniqueData
}
