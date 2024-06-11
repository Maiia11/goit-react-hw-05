import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {getReviewsMovies} from '../../films-api'

const MovieReviews = () => {
    const [reviews, setReviews] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(false);
    const { movieId } = useParams();
    
    useEffect(() => {
        const getReviews = async () => {
            try {
            setIsLoading(true);
                const data = await getReviewsMovies(movieId);
                setReviews(data.results);
                setError(false)
        } catch (err) {
                setError(true)
            } finally {
                setIsLoading(false)
        } 
            
        }
        getReviews()
        
    }, [movieId])
    
    if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error fetching movie details. Please try again later.</p>;
    }
    
  return (
    <div>
        {reviews && reviews.length > 0 ? (
            reviews.map(({ id, author, content}) => (
                <div key={id}>
                    <h3>Author: {author}</h3>
                    <p> {content}</p>
                </div>
            ))
        ) : (
            <p>We don't have any reviews for this movie.</p>
        )}
    </div>
  )
}

export default MovieReviews