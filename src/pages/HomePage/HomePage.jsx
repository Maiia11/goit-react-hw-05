import { useEffect, useState } from "react"
import { getTrendingMovies } from "../../films-api"
import MovieList from "../../components/MovieList/MovieList";
import { useLocation } from "react-router-dom";



const HomePage = () => {
    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(false);
    const location = useLocation();


    

    useEffect(() => {
        const getMovies = async () => {
            try {
                setIsLoading(true);
                const data = await getTrendingMovies();
                setMovies(data.results)
                setError(false)
            } catch (err) {
                setError(true)
            } finally {
                setIsLoading(false)
            }
        }
        getMovies()
    }, [])
  return (
      <div>
          <h2>Trending today</h2>
          {isLoading && <p>Loading...</p>}
        {error && <p>Error fetching movies. Please try again later.</p>}

          {movies.length > 0 && <MovieList movies={movies} location={location} />
            }    
      </div>

  )
}

export default HomePage