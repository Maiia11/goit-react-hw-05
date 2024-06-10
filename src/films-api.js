import axios from "axios";
const url = 'https://api.themoviedb.org/3/trending/movie/day';
const language = 'en-US';
const bearerToken = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwNmUyZDFhODU5N2I5OGJkZGNjZjRmZWQ5ZTk4ZTllMyIsInN1YiI6IjY2NjZjYzRjMzg4OGNhZmUwOGMwYTE2YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.1aHpZZSKcymdOixu2x8I6NJGzZk5e7KadrVJBJ_y7K4'

export const getTrendingMovies = async () => {
  try {
    const { data } = await axios.get(url, {
    params: {
        language: language,
      },
    headers: {
    Authorization: `Bearer ${bearerToken}`
    }
  })
 return data
    
  } catch (err) {
    console.log(err);
  }
  
}


export const getSingleMovieApi = async (movieId) => {
  try {
    const {data} =  await axios.get(`https://api.themoviedb.org/3/movie/${movieId}`, {
    params: {
        language: language,
      },
    headers: {
    Authorization: `Bearer ${bearerToken}`
    }
  })
 return data
    
  } catch (err) {
    console.log(err);
  }
}
  
export const getCastMovies = async (movieId) => {
  try {
    const {data} =  await axios.get(`https://api.themoviedb.org/3/movie/${movieId}/credits`, {
    params: {
        language: language,
      },
    headers: {
    Authorization: `Bearer ${bearerToken}`
    }
  })
 return data
    
  } catch (err) {
    console.log(err);
  }
   
}
 

export const getReviewsMovies = async (movieId) => {
  try {
    const {data} =  await axios.get(`https://api.themoviedb.org/3/movie/${movieId}/reviews`, {
    params: {
        language: language,
      },
    headers: {
    Authorization: `Bearer ${bearerToken}`
    }
  })
 return data
    
  } catch (err) {
    console.log(err);
  }
   
 }


export const getMoviesApiWithQuery = async (query) => {
  try {
    const {data} =  await axios.get(`https://api.themoviedb.org/3/search/movie`, {
    params: {
        language: language,
      query: query,
      
      },
    headers: {
    Authorization: `Bearer ${bearerToken}`
    }
  })
 return data
    
  } catch (err) {
    console.log(err);
  }
   
 }


   




