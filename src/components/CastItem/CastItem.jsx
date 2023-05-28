import React from 'react';

const CastItem = ({ credits }) => {
  return (
    <ul>
      {credits.map(credit => {
        const { character, id, name, popularity, profile_path } = credit;

        return (
          <li key={id}>
            <img src={`https://image.tmdb.org/t/p/w200${profile_path}`} alt={name} />
            <h4>{name}</h4>
            <p>{character}</p>
            <p>{Number.parseFloat(popularity).toFixed(1)} ☆</p>
          </li>
        )
      })}
    </ul>
  )
};

export default CastItem;