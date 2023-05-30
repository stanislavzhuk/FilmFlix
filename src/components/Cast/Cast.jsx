import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCredits } from 'services/themoviedb-api';
import CastItem from 'components/CastItem/CastItem';
import css from './Cast.module.css';

const Cast = () => {
  const [credits, setCredits] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    const getMovieCreditsData = async () => {
      try {
        const response = await getMovieCredits(movieId);
        setCredits(response);
        // console.log(response);
      } catch (error) {
        console.error(error.message);
      }
    };

    getMovieCreditsData();
  }, [movieId]);

  return (
    <div className={css.castContainer}>
      <h3 className={css.castTitle}>Cast</h3>
      {credits.length > 0 ? (
        <CastItem credits={credits} />
      ) : (
        <div>Regrettably, there is no information about the cast for this movie.</div>
      )}
    </div>
  );
};

export default Cast;
