import { Route, Routes } from 'react-router-dom';
import Navigation from '../../pages/Navigation/Navigation';
import './App.css'

import axios from "axios";
import HomePage from '../../pages/HomePage/HomePage';
import MoviesPage from '../../pages/MoviesPage/MoviesPage';

const url = 'https://api.themoviedb.org/3/trending/movie/day?language=en-US';

const options = {
  headers: {
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwNmUyZDFhODU5N2I5OGJkZGNjZjRmZWQ5ZTk4ZTllMyIsInN1YiI6IjY2NjZjYzRjMzg4OGNhZmUwOGMwYTE2YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.1aHpZZSKcymdOixu2x8I6NJGzZk5e7KadrVJBJ_y7K4'
  }
};

 axios.get(url, options)
  .then(response => console.log(response))
  .catch(err => console.error(err));

  // const keyApi = "06e2d1a8597b98bddccf4fed9e98e9e3";
function App() {
    return (
        <>
            <Navigation />
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/movies' element={<MoviesPage/>} />
            </Routes>
        </>
    )


  
  
}

export default App
