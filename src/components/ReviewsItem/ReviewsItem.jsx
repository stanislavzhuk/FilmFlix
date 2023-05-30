import React from 'react';
import PropTypes from 'prop-types';
import css from './ReviewsItem.module.css';
import { formatAvatar, formatDateTime, ratingConvert } from 'services/utils';

const ReviewsItem = ({ reviews }) => {
  return (
    <ul className={css.reviewsList}>
      {reviews.map(review => {
        const { author_details, content, created_at, id, url } = review;
        const { avatar_path, username, rating } = author_details;

        return (
          <li key={id} className={css.reviewsItem}>
            <a className={css.reviewsContLink} rel="noopener noreferrer" target="_blank" href={url}>
              <h4 className={css.reviewsName}>{username}</h4>
              <p>{rating !== null && `Rating: ${ratingConvert(rating)}`}</p>
              <img src={formatAvatar(avatar_path)} alt="Review Author" width="100" />
              <p>{content}</p>
              <p>Created: {formatDateTime(created_at)}</p>
            </a>
          </li>
        )
      })}
    </ul>
  );
};

ReviewsItem.propTypes = {
  reviews: PropTypes.arrayOf(
    PropTypes.shape({
      author_details: PropTypes.shape({
        avatar_path: PropTypes.string,
        username: PropTypes.string,
        rating: PropTypes.number,
      }),
      content: PropTypes.string,
      created_at: PropTypes.string,
      id: PropTypes.string,
      url: PropTypes.string,
    })
  ),
};

export default ReviewsItem;