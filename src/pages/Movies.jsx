import React, { useState, useEffect } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import SearchBar from 'components/SearchBar/SearchBar';
import Gallery from 'components/Gallery/Gallery';
import GalleryItem from 'components/GalleryItem/GalleryItem';
import { searchMovies } from 'services/themoviedb-api';
import css from '../components/App/App.module.css';

const Movies = () => {
  const location = useLocation();
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const value = searchParams.get('query') || '';

  useEffect(() => {
    const getSearchMoviesData = async () => {
      try {
        const { results } = await searchMovies(value);
        setMovies(results);
        // console.log(results);
      } catch (error) {
        console.error(error.message);
      }
    };

    getSearchMoviesData();
  }, [value]);

  const handleSearchChange = (value) => {
    setSearchParams(value !== '' ? { query: value } : {});
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (!value) {
      alert('Please enter a search query');
      return;
    }
    setSearchParams(value !== '' ? { query: value } : {});
    // console.log({ query: value });
  };

  return (
    <div className={css.container}>
      <form className={css.form}>
        <h2 className={css.visually__hidden}>Search movies</h2>
        <button onClick={handleSearchSubmit} className={css.button}></button>
        <SearchBar value={value} onChange={handleSearchChange} />
      </form>

      {movies.length === 0 && value && <h2>No results found</h2>}

      <Gallery>
        {movies.map((movie) => (
          <GalleryItem data={movie} key={movie.id} state={{ from: location }} />
        ))}
      </Gallery>
    </div>
  );
};

export default Movies;
