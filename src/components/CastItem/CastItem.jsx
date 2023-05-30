import React from 'react';
import { formatFoto } from 'services/utils';
import PropTypes from 'prop-types';
import css from './CastItem.module.css';

const CastItem = ({ credits }) => {
  return (
    <ul className={css.castList}>
      {credits.map(credit => {
        const { character, id, name, popularity, profile_path } = credit;

        return (
          <li key={id} className={css.castItem}>
            <img className={css.castImg} src={formatFoto(profile_path)} alt={name} width="200" />
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
