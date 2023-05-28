import React, { useEffect, useRef, useState } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import MovieDescription from 'components/MovieCard/MovieCard';
import { getMovieDetails } from 'services/themoviedb-api';

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
      <article>
        <Link to={goBackLocationRef.current}>Go back</Link>
        <MovieDescription info={movieInfo} />
      </article>
    </>
  );
};

export default MovieDetails;