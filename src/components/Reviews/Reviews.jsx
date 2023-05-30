import ReviewsItem from 'components/ReviewsItem/ReviewsItem';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from 'services/themoviedb-api';
import css from './Reviews.module.css';

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
    <div className={css.reviewsContainer}>
      <h3 className={css.reviewsTitle}>Reviews</h3>
      {reviews.length > 0 ? (
        <ReviewsItem reviews={reviews} />
      ) : (
        <p className={css.reviewsAltText}>We don't have any reviews for this movie yet.</p>
      )}
    </div>
  )};

export default Reviews;