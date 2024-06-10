import { Link } from "react-router-dom"


const MovieList = ({title, id}) => {
  return (
      <div>
          <ul>
              <li>
                  <Link to={String(id)}>{title}</Link>
              </li>
          </ul>
    </div>
  )
}

export default MovieList