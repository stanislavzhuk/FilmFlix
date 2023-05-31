import React from 'react';
import { Link } from 'react-router-dom';
import { formatDate, formatPoster } from 'services/utils';
import PropTypes from 'prop-types';
import css from './GalleryItem.module.css';

const GalleryItem = ({ data, state }) => {
  const { id, poster_path, release_date, title, vote_average } = data;

  return (
    <li className={css.card}>
      <Link to={`/movies/${id}`} state={state}>
        <p className={css.title}>{title}</p>
        <div>
          <ul className={css.description}>
            <li>Rating: {vote_average.toFixed(1)}</li>
            <li>{formatDate(release_date)}</li>
          </ul>
        </div>
        <img className={css.image} src={formatPoster(poster_path)} alt={title} loading="lazy" width="" />
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
