import React from 'react';
import { Link } from 'react-router-dom';
import { ToStringConverter, formatDate, formatPoster } from 'services/utils';
import PropTypes from 'prop-types';
import css from './MovieCard.module.css';

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

  const productionCompaniesList = production_companies?.map(
    ({ id, logo_path, name }) =>
      logo_path && (
        <li key={id}>
          {logo_path && (
            <img
              className={css.descrLogo}
              src={`https://image.tmdb.org/t/p/w500${logo_path}`}
              alt={name}
              style={{ maxHeight: 50, maxWidth: 200 }}
            />
          )}
        </li>
      )
  );
  // console.log(productionCompaniesList);

  return (
    <section className={css.container}>
      <div className={css.posterContainer}>
        <a className={css.posterLink} rel="noopener noreferrer" target="_blank" href={homepage}>
          <img
            className={css.posterImg}
            src={formatPoster(poster_path)}
            alt={original_title}
            loading="lazy"
            width="300"
            max-height='709'
          />
        </a>
        <p className={css.posterCountries}>{ToStringConverter(production_countries) !== '' ? ToStringConverter(production_countries) : 'Country information not available'}</p>
      </div>

      <div className={css.descrContainer}>
        <div>
          <div>
            <h1 className={css.descrTitle}>
              {title}
              {release_date && <span> ({release_date.slice(0, 4)})</span>}
            </h1>
            <p className={css.descrTagline}>{tagline}</p>
          </div>

          <div>
            <h3 className={css.title}>Overview: </h3>
            <p className={css.descrOverview}>{overview !== '' ? overview : 'Unfortunately, there is no detailed overview available for this movie.'}</p>
          </div>

          <div>
            <h3 className={css.title}>Genres: </h3>
            <p>{ToStringConverter(genres) !== '' ? ToStringConverter(genres) : 'No genres provided'}</p>
          </div>
        </div>
      
        <div className={css.descrStatsAndComp}>
          <div>
            <h3 className={css.title}>Statistics: </h3>
            <ul className={css.descrStats}>
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
                <p>{vote_count !== '' ? vote_count : 'No votes'}</p>
              </li>
            </ul>
          </div>

          <div>
            <h3 className={css.title}>Production Companies:</h3>
            {productionCompaniesList?.length > 0 && <ul className={css.descrProdComp}>{productionCompaniesList}</ul>}
          </div>
        </div>

        <div>
          <h2 className={css.additionalTitle}>Additional Information</h2>
          <ul className={css.buttonContainer}>
            <li className={css.buttonItem}>
              <Link to='cast' className={css.buttonLink}>
                Cast
              </Link>
            </li>
            <li className={css.buttonItem}>
              <Link to='reviews' className={css.buttonLink}>
                Reviews
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

MovieCard.propTypes = {
  info: PropTypes.shape({
    genres: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string,
      })
    ),
    homepage: PropTypes.string,
    original_title: PropTypes.string,
    overview: PropTypes.string,
    poster_path: PropTypes.string,
    production_companies: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        logo_path: PropTypes.string,
        name: PropTypes.string,
      })
    ),
    production_countries: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string,
      })
    ),
    release_date: PropTypes.string,
    tagline: PropTypes.string,
    title: PropTypes.string,
    vote_average: PropTypes.number,
    vote_count: PropTypes.number,
  }),
};

export default MovieCard;