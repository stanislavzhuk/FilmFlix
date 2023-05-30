import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
import defaultReviewAuthorImage from '../../images/default_review_author.png';
import css from './ReviewsItem.module.css';

const ReviewsItem = ({ reviews }) => {
  const ratingConvert = rating => {
    return Array.from({ length: rating }, () => '✯').join('');
  };
  
  const formatDateTime = dateTime => {
    const formattedDateTime = moment(dateTime).format('DD MMM YYYY HH:mm:ss');
    return formattedDateTime;
  };

  return (
    <ul className={css.reviewsList}>
      {reviews.map(review => {
        const { author_details, content, created_at, id, url } = review;
        const { avatar_path, username, rating } = author_details;

        const formatAvatar = avatar => {
          if (!avatar) {
            return defaultReviewAuthorImage;
          }
          const arr = Array.from(avatar);
          arr.shift();
          if (arr.length <= 31) {
            return `https://image.tmdb.org/t/p/w500/${arr.join('')}`;
          }
          return arr.join('');
        };

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