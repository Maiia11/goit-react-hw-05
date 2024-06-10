import { useParams } from "react-router-dom"
import { getSingleMovieApi } from "../../films-api" 
const MovieDetailsPage = () => {
    const{id} = useParams()


  return (
    <div>MovieDetailsPage</div>
  )
}

export default MovieDetailsPage