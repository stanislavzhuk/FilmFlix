import React from 'react';
import defaultCastImage from '../../images/default_cast.png';

const CastItem = ({ credits }) => {
  return (
    <ul>
      {credits.map(credit => {
        const { character, id, name, popularity, profile_path } = credit;
        const castImage = profile_path ? `https://image.tmdb.org/t/p/w500${profile_path}` : defaultCastImage;

        return (
          <li key={id}>
            <img src={castImage} alt={name} width="200" />
            <h4>{name}</h4>
            <p>{character}</p>
            <p>{Number.parseFloat(popularity).toFixed(1)} ☆</p>
          </li>
        );
      })}
    </ul>
  );
};

export default CastItem;
