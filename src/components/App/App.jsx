import { Route, Routes } from 'react-router-dom';
import Navigation from '../../pages/Navigation/Navigation';
import './App.css'
import HomePage from '../../pages/HomePage/HomePage';
import MoviesPage from '../../pages/MoviesPage/MoviesPage';


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
