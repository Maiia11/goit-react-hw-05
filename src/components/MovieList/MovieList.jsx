import { Link } from "react-router-dom"


const MovieList = ({title, movieId}) => {
  return (
      <div>
          <ul>
        <li>
          <nav>
            <Link to={`/movies/${movieId}`}>{title}</Link>
            </nav>
              </li>
          </ul>
    </div>
  )
}

export default MovieList