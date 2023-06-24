import React, { useEffect, useState } from 'react';
import { getTrendingMovies } from 'services/themoviedb-api';
import Gallery from 'components/Gallery/Gallery';
import GalleryItem from 'components/GalleryItem/GalleryItem';
import css from '../components/App/App.module.css';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getTrendingMoviesData = async () => {
      try {
        const { results } = await getTrendingMovies();
        setMovies(results);
        // console.log(results);
      } catch (error) {
        console.error(error.message);
      }
    };

    getTrendingMoviesData();
  }, []);

  return (
    <div className={css.container}>
      <h1 className={`${css.title} ${css.visually__hidden}`}>Trending movies today</h1>
      <Gallery>
        {movies.map(item => (
          <GalleryItem data={item} key={item.id} state={{ from: '/' }} />
        ))}
      </Gallery>
    </div>
  )
};

export default Home;