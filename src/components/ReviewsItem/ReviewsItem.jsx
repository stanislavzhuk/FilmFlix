import React from 'react';
import moment from 'moment';
import defaultReviewAuthorImage from '../../images/default_review_author.png';

const ReviewsItem = ({ reviews }) => {
  const ratingConvert = rating => {
    return Array.from({ length: rating }, () => '✯').join('');
  };
  
  const formatDateTime = dateTime => {
    const formattedDateTime = moment(dateTime).format('DD MMM YYYY HH:mm:ss');
    return formattedDateTime;
  };

  return (
    <ul>
      {reviews.map(review => {
        const { author_details, content, created_at, id, url } = review;
        const { avatar_path, username, rating } = author_details;
        const reviewImage = !avatar_path || avatar_path.includes('secure.gravatar') ? defaultReviewAuthorImage : `https://image.tmdb.org/t/p/w500/${avatar_path}`;

        return (
          <li key={id}>
            <div>
              <h4>{username}</h4>
              <div>
                <img src={reviewImage} alt="Review Author" width="100" />
                <ul>
                  <li>{rating !== null && `Rating: ${ratingConvert(rating)}`}</li>
                  <li>Created: {formatDateTime(created_at)}</li>
                </ul>
              </div>
            </div>
            <a rel="noopener noreferrer" target="_blank" href={url}>
              <p>{content}</p>
            </a>
          </li>
        )
      })}
    </ul>
  )
};

export default ReviewsItem;