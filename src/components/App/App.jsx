import { Route, Routes } from 'react-router-dom';
import Navigation from '../../pages/Navigation/Navigation';
import './App.css'
import HomePage from '../../pages/HomePage/HomePage';
import MoviesPage from '../../pages/MoviesPage/MoviesPage';
import MovieDetailsPage from '../../pages/MovieDetailsPage/MovieDetailsPage';


function App() {
    return (
        <>
            <Navigation />
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/movies' element={<MoviesPage />} />
                 <Route path='/movies/:id' element={<MovieDetailsPage />} />
            </Routes>
        </>
    )


  
  
}

export default App
