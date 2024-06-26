import { Link, Outlet, useLocation, useParams } from "react-router-dom"
import { getSingleMovieApi } from "../../films-api" 
import { useEffect, useRef, useState } from "react";
import css from './MovieDetailsPage.module.css'

const MovieDetailsPage = () => {
    const { movieId } = useParams();
    const [film, setFilm] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(false);
    const location = useLocation();
    const backLocation = useRef(location.state ?? '/movies')
    
    useEffect(() => {
        const getFilm = async () => {
            try {
            setIsLoading(true);
                const data = await getSingleMovieApi(movieId);
                setFilm(data);
                setError(false)
        } catch (err) {
                setError(true)
            } finally {
                setIsLoading(false)
        } 
        }
        getFilm()
        
    }, [movieId])
    
    
    if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error fetching movie details. Please try again later.</p>;
  }

  return (
      <div>
          <Link to={backLocation.current}>
              <button type="button" className={css.btn}>Go back</button>
          </Link>

          <div className={css.container}>
              <img src={`https://image.tmdb.org/t/p/w300${film.poster_path}`} alt="photo" />
              <div className={css.containerInf}>
          <h1>{film.original_title}</h1>
          <h2 className={css.h2}> Overview</h2>
                  <p>{film.overview}</p>
                  
                  <h2 className={css.h2}>Genres</h2>
                  <div className={css.container}>
          {film.genres.map((genre) => ( <p key={genre.id}>{genre.name}</p>
          ))}
                      </div>
                  </div>
          </div>
          <div className={css.containerAditionInf}>
          <h3 className={css.h2}>Aditional information</h3>
          <nav className={css.nav}>
          <Link to='cast' className={css.link}>Cast</Link>
              <Link to='reviews' className={css.link}>Reviews</Link>
          </nav>
              <Outlet />
              </div>
          
      </div>

  )
}

export default MovieDetailsPage