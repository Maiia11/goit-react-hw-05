import {  useState } from "react";
import{getMoviesApiWithQuery} from '../../films-api'
import MovieList from "../../components/MovieList/MovieList";



const MoviesPage = () => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([])
    const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  


  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };
  
  const handleSearch = async (e) => {
    e.preventDefault();
    
    
    try {
      setIsLoading(true);
      setError(false);
      const data = await getMoviesApiWithQuery(query);
      setMovies(data.results);
    } catch (err) {
      setError(true);
    } finally {
      setIsLoading(false);
    }
  }


  
  return (
    <div>
      <form onSubmit={handleSearch}>
        <input type="text"  value={query} onChange={handleInputChange} />
      <button type="submit">Search</button>
      </form>
      
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

export default MoviesPage