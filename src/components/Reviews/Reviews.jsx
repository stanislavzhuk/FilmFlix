import ReviewsItem from 'components/ReviewsItem/ReviewsItem';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from 'services/themoviedb-api';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    const getMovieReviewsData = async () => {
      try {
        const response = await getMovieReviews(movieId);
        setReviews(response);
        // console.log(response);
      } catch (error) {
        console.error(error.message);
      }
    };

    getMovieReviewsData();
  }, [movieId]);


  return (
    <div>
      <h3>Reviews</h3>
      {reviews.length > 0 ? (
        <ReviewsItem reviews={reviews} />
      ) : (
        <div>We don't have any reviews for this movie yet.</div>
      )}
    </div>
  )};

export default Reviews;