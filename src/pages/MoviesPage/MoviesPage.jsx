import {  useEffect, useState } from "react";
import{getMoviesApiWithQuery} from '../../films-api'
import MovieList from "../../components/MovieList/MovieList";
import { useLocation, useSearchParams } from "react-router-dom";
import css from './MoviesPage.module.css'

const MoviesPage = () => {

  const [movies, setMovies] = useState([])
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState(searchParams.get('query') || "")
  const [noResults, setNoResults] = useState(false);
  const location = useLocation()
  

  useEffect(() => {
    if (searchParams.get('query')) {
      fetchMovies(searchParams.get('query'))
    }
  }, [searchParams])

  const handleInputChange = (e) => {
    setQuery(e.target.value);
    setNoResults(false);
  };
  

  const handleSearch = async (e) => {
    e.preventDefault();
    searchParams.set('query', query);
    setSearchParams(searchParams);
    fetchMovies(query);
  }
  
  const fetchMovies = async (query) => {
    try {
      setIsLoading(true);
      setError(false);
      setNoResults(false);
      setMovies([]);
      const data = await getMoviesApiWithQuery(query);
      if (data.results.length === 0) {
        setNoResults(true);
      } else {
        setMovies(data.results);
        setNoResults(false)

      }
    } catch (err) {
      setError(true);
    } finally {
      setIsLoading(false);
    }
  }
 
  return (
    <div className={css.container}>
      <form onSubmit={handleSearch}>
      <input className={css.input} type="text" value={query} onChange={handleInputChange} />
      <button type="submit" className={css.btn}>Search</button>
      </form>
      
      {isLoading && <p>Loading...</p>}
      {error && <p>Error fetching movies. Please try again later.</p>}
      {noResults && <p>No movies found with the title "{query}". Please try again.</p>}
      {movies.length > 0 && <MovieList movies={movies} location={location} />}
    </div>
  )
}

export default MoviesPage