import { Link } from "react-router-dom"

const MovieList = ({ movies, location }) => {

  return (
      <div>
          <ul>
         {movies.map((film) => (
                    <li key={film.id}>
                        <nav>
                            <Link to={`/movies/${film.id}`} state={location}>{film.original_title} </Link>
                        </nav>
                    </li>
                ))}
          </ul>
    </div>
  )
}

export default MovieList