import React from 'react';
import { NavLink, Route, Routes } from 'react-router-dom';
import Home from 'pages/Home';
import Movies from 'pages/Movies';
import MovieDetails from 'pages/MovieDetails';

const App = () => {
  return (
    <div>
      <header>
        <nav>
          <NavLink to='./'>Home</NavLink>
          <NavLink to='./movies'>Movies</NavLink>
        </nav>
      </header>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/movies' element={<Movies />} />
        <Route path='/movies/:movieId' element={<MovieDetails />}>
          <Route path='cast' />
          <Route path='reviews' />
        </Route>
        <Route path='*' />
      </Routes>
    </div>
  );
};

export default App;
