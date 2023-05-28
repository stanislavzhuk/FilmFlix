import React from 'react';

const ReviewsItem = ({ reviews }) => {
const ratingConvert = rating => {
  return Array.from({ length: rating }, () => '✯').join('');
};

  return (
    <ul>
      {reviews.map(review => {
        const { author_details, content, created_at, id, url } = review;
        const { avatar_path, username, rating } = author_details;

        return (
          <li key={id}>
            <div>
              <h4>{username}</h4>
              <div>
                <img src={`https://image.tmdb.org/t/p/w200/${avatar_path}`} alt="Avatar" width="100" />
                <ul>
                  <li>{rating !== null && `Rating: ${ratingConvert(rating)}`}</li>
                  <li>Created: {created_at}</li>
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