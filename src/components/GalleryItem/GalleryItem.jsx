import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import defaultPosterImage from '../../images/default_poster.png';
import css from './GalleryItem.module.css';

const GalleryItem = ({ data, state }) => {
  const { id, poster_path, release_date, title, vote_average } = data;
  const posterImage = poster_path ? `https://image.tmdb.org/t/p/w500${poster_path}` : defaultPosterImage;

  return (
    <li className={css.card}>
      <Link to={`/movies/${id}`} state={state}>
        <p className={css.title}>{title}</p>
        <div>
          <ul className={css.description}>
            <li>Rating: {vote_average.toFixed(1)}</li>
            <li>{release_date}</li>
          </ul>
        </div>
        <img src={posterImage} alt={title} loading="lazy" width="250" />
      </Link>
    </li>
  );
};

GalleryItem.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number,
    poster_path: PropTypes.string,
    release_date: PropTypes.string,
    title: PropTypes.string,
    vote_average: PropTypes.number,
  }),
  state: PropTypes.object,
};

export default GalleryItem;
