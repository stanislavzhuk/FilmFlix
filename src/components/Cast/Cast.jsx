import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCredits } from 'services/themoviedb-api';
import CastItem from 'components/CastItem/CastItem';

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
    <div>
      <h3>Cast</h3>
      {credits.length > 0 ? (
        <CastItem credits={credits} />
      ) : (
        <div>No info about the cast.</div>
      )}
    </div>
  )
};

export default Cast;