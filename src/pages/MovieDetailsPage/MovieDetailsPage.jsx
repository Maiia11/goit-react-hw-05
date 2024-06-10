import { Link, useParams } from "react-router-dom"
import { getSingleMovieApi } from "../../films-api" 
import { useEffect, useState } from "react";
const MovieDetailsPage = () => {
    const { movieId } = useParams();
    const [film, setFilm] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(false);
    
    useEffect(() => {
        const getFilm = async () => {
            try {
            setIsLoading(true);
                const data = await getSingleMovieApi(movieId);
                setFilm(data);
                setError(false)
                console.log(data);
            
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
          <div>
          <img src={`https://image.tmdb.org/t/p/w500${film.poster_path}`} />
          <h1>{film.original_title}</h1>
          <h2>Overview</h2>
          <p>{film.overview}</p>
          <h2>Genres</h2>
          {film.genres.map((genre) => (
    <p key={genre.id}>{genre.name}</p>
          ))}
          </div>
         
          <h3>Aditional information</h3>
          <nav>
          <Link to='cast'>Cast</Link>
              <Link to='reviews'>Reviews</Link>
              </nav>

      </div>


      
    
   
  )
}

export default MovieDetailsPage