import React, { Suspense, useEffect, useRef, useState } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import MovieDescription from 'components/MovieCard/MovieCard';
import { getMovieDetails } from 'services/themoviedb-api';
import Loader from 'components/Loader/Loader';
import css from '../components/MovieCard/MovieCard.module.css';

const MovieDetails = () => {
  const location = useLocation();
  const goBackLocationRef = useRef(location.state?.from ?? '/');
  const [movieInfo, setMovieInfo] = useState({});
  const { movieId } = useParams();

  useEffect(() => {
    const getMovieDetailsData = async () => {
      try {
        const response = await getMovieDetails(movieId);
        setMovieInfo(response);
        // console.log(response);
      } catch (error) {
        console.error(error.message);
      }
    };

    getMovieDetailsData();
  }, [movieId])

  return (
    <>
      <article className={css.movieDetContainer}>
        <Link to={goBackLocationRef.current} className={css.buttonGoBack}>Go back</Link>
        <MovieDescription info={movieInfo} />
      </article>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default MovieDetails;