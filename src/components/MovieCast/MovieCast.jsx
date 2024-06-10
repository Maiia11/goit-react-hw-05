import { useEffect, useState } from "react";
import{getCastMovies} from '../../films-api'
import { useParams } from "react-router-dom";


const MovieCast = () => {
    const [casts, setCasts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(false);
    const { movieId } = useParams();
    
    useEffect(() => {
        const getCast = async () => {
            try {
            setIsLoading(true);
                const data = await getCastMovies(movieId);
                setCasts(data.cast)

                setError(false)
                
                
            
        } catch (err) {
                setError(true)
            
            } finally {
                setIsLoading(false)
            
        } 
            
        }
        getCast()
        
    }, [movieId])
    if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error fetching movie details. Please try again later.</p>;
  }
  return (
      <div>
        {casts && casts.length > 0 ? (
            casts.map(({ id, name, character, profile_path }) => (
                <div key={id}>
                    {profile_path && <img src={`https://image.tmdb.org/t/p/w300${profile_path}`} alt="photo" />}
                    <h4>Name: {name}</h4>
                    <p>Character: {character}</p>
                </div>
            ))
        ) : (
            <p>No cast members found.</p>
        )}
    </div>
  )
}

export default MovieCast