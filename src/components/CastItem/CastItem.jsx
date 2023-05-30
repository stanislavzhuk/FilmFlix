import React from 'react';
import PropTypes from 'prop-types';
import defaultCastImage from '../../images/default_cast.png';
import css from './CastItem.module.css';

const CastItem = ({ credits }) => {
  return (
    <ul className={css.castList}>
      {credits.map(credit => {
        const { character, id, name, popularity, profile_path } = credit;
        const castImage = profile_path ? `https://image.tmdb.org/t/p/w500${profile_path}` : defaultCastImage;

        return (
          <li key={id} className={css.castItem}>
            <img className={css.castImg} src={castImage} alt={name} width="200" />
            <h4 className={css.castName}>{name}</h4>
            <p className={css.castCharacter}>{character}</p>
            <p className={css.castPopularity}>Popularity: {Number.parseFloat(popularity).toFixed(1)} ☆</p>
          </li>
        );
      })}
    </ul>
  );
};

CastItem.propTypes = {
  credits: PropTypes.arrayOf(
    PropTypes.shape({
      character: PropTypes.string,
      id: PropTypes.number,
      name: PropTypes.string,
      popularity: PropTypes.number,
      profile_path: PropTypes.string,
    })
  ),
};

export default CastItem;
