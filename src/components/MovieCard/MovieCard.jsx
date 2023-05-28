import React from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';
import defaultPosterImage from '../../images/default_poster.png';

const MovieCard = ({ info }) => {
  const {
    genres,
    homepage,
    original_title,
    overview,
    poster_path,
    production_companies,
    production_countries,
    release_date,
    tagline,
    title,
    vote_average,
    vote_count
  } = info;

  const genresList = genres?.map(genre => genre.name).join(', ');

  const productionCountriesList = production_countries?.map(countrie => countrie.name).join(', ');

  const productionCompaniesList = production_companies?.map(
    ({ id, logo_path, name }) =>
      logo_path && (
        <li key={id}>
          {logo_path && (
            <img
              src={`https://image.tmdb.org/t/p/w500${logo_path}`}
              alt={name}
              style={{ maxHeight: 50, maxWidth: 200 }}
            />
          )}
        </li>
      )
  );
  // console.log(productionCompaniesList);

  const formatDate = date => {
    const formattedDate = moment(date).format('DD MMM YYYY');
    return formattedDate;
  };

  const posterImage = poster_path ? `https://image.tmdb.org/t/p/w500${poster_path}` : defaultPosterImage;

  return (
    <>
      <div>
        <a rel="noopener noreferrer" target="_blank" href={homepage}>
          <img
            src={posterImage}
            alt={original_title}
            loading="lazy"
            width="300"
            max-height='709'
          />
        </a>
        <p>{productionCountriesList !== '' ? productionCountriesList : 'Country information not available'}</p>
      </div>

      <div>
        <h2>
          {title}
          {release_date && <span> ({release_date.slice(0, 4)})</span>}
        </h2>
        <p>{tagline}</p>
      </div>

      <div>
        <h4>Overview: </h4>
        <p>{overview !== '' ? overview : 'Unfortunately, there is no detailed overview available for this movie.'}</p>
      </div>

      <div>
        <h4>Genres: </h4>
        <p>{genresList !== '' ? genresList : 'No genres provided'}</p>
      </div>
      
      <div>
        <h4>Statistics: </h4>
        <ul>
          <li>
            Release Date:
            <p>{formatDate(release_date)}</p>
          </li>

          <li>
            User Score:
            <p>{Math.round(vote_average * 10)}%&ensp;</p>
          </li>

          <li>
            Votes:
            <p>{vote_count !== '' ? vote_count : 'No votes yet'}</p>
          </li>
        </ul>
      </div>

      <div>
        <h4>Production Companies:</h4>
        {productionCompaniesList?.length > 0 && <div>{productionCompaniesList}</div>}
      </div>

      <div>
        <h3>Additional Information</h3>
        <ul>
          <li>
            <Link to='cast'>
              Cast
            </Link>
          </li>
          <li>
            <Link to='reviews'>
              Reviews
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default MovieCard;