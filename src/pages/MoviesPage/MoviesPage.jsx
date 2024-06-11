import {  useEffect, useState } from "react";
import{getMoviesApiWithQuery} from '../../films-api'
import MovieList from "../../components/MovieList/MovieList";
import { useSearchParams } from "react-router-dom";
import css from './MoviesPage.module.css'

const MoviesPage = () => {

  const [movies, setMovies] = useState([])
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState(searchParams.get('query') || "")
  

  useEffect(() => {
    if (searchParams.get('query')) {
      fetchMovies(searchParams.get('query'))
    }
  }, [])

  const handleInputChange = (e) => {
    setQuery(e.target.value);
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
      const data = await getMoviesApiWithQuery(query);
      setMovies(data.results);
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