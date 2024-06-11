import { Link, useLocation } from "react-router-dom"


const MovieList = ({ title, movieId }) => {
const location = useLocation();
  return (
      <div>
          <ul>
        <li>
          <nav>
            <Link to={`/movies/${movieId}`} state={location}>{title}</Link>
            </nav>
              </li>
          </ul>
    </div>
  )
}

export default MovieList