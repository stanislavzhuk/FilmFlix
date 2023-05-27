import React, { useEffect, useState } from 'react'
import { getTrendingMovies } from 'services/themoviedb-api';
import Gallery from 'components/Gallery/Gallery';
import GalleryItem from 'components/GalleryItem/GalleryItem';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getTrendingMoviesData = async () => {
      try {
        const {results} = await getTrendingMovies();
        setMovies(results);
        console.log(results);
      } catch (error) {
        console.error(error.message);
      }
    };

    getTrendingMoviesData();
  }, []);

  return (
    <>
      <Gallery>
        {movies.map(item => (
          <GalleryItem data={item} key={item.id} state={{ from: '/' }} />
        ))}
      </Gallery>
    </>
  )
};

export default Home