import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from 'components/Layout/Layout';
import Home from 'pages/Home';
import Movies from 'pages/Movies';
import MovieDetails from 'pages/MovieDetails';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='movies' element={<Movies />} />
          <Route path='movies/:movieId' element={<MovieDetails />}>
            <Route path='cast' />
            <Route path='reviews' />
          </Route>
          <Route path='*' />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
