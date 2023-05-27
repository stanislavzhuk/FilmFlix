import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import SearchBar from 'components/SearchBar/SearchBar';
import Gallery from 'components/Gallery/Gallery';
import GalleryItem from 'components/GalleryItem/GalleryItem';
import { searchMovies } from 'services/themoviedb-api';

const Movies = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const getSearchMoviesData = async () => {
      try {
        const { results } = await searchMovies(searchQuery);
        setMovies(results);
        // console.log(results);
      } catch (error) {
        console.error(error.message);
      }
    };
    
    if (searchQuery !== '') {
      getSearchMoviesData();
    } else {
      setMovies([]);
    }
  }, [searchQuery]);
  
  const handleSearchChange = (value) => {
    setSearchQuery(value);
  };
  
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log(searchQuery);
  };
  
  return (
    <div>
      <form>
        <button onClick={handleSearchSubmit}>Search</button>
        <SearchBar value={searchQuery} onChange={handleSearchChange} />
      </form>

      {movies.length === 0 && searchQuery && (
        <h2>No results found</h2>
      )}

      <Gallery>
        {movies.map(movie => (
          <GalleryItem data={movie} key={movie.id} state={{ from: location }} />
        ))}
      </Gallery>
    </div>
  );
};

export default Movies;