import React from 'react';
import { Link } from 'react-router-dom';
import defaultPosterImage from '../../images/default_poster.png';

const GalleryItem = ({ data, state }) => {
  const { id, poster_path, release_date, title, vote_average } = data;
  const posterImage = poster_path ? `https://image.tmdb.org/t/p/w500${poster_path}` : defaultPosterImage;

  return (
    <li>
      <Link to={`/movies/${id}`} state={state}>
        <p>{title}</p>
        <div>
          <ul>
            <li>{vote_average}</li>
            <li>{release_date}</li>
          </ul>
        </div>
        <img src={posterImage} alt={title} loading="lazy" width="180" />
      </Link>
    </li>
  )
};

export default GalleryItem;