import { useEffect, useState } from "react"
import { getTrendingMovies } from "../../films-api"
import MovieList from "../../components/MovieList/MovieList";



const HomePage = () => {
    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(false);
    

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

          {movies.length > 0 && movies.map((film => {
              return (
                  <div key={film.id}>
                      <MovieList title={film.original_title} movieId={film.id} />
              </div>)
              }))
            }    
      </div>

  )
}

export default HomePage