import moment from 'moment';
import defaultReviewAuthorImage from '../images/default_review_author.png';
import defaultPosterImage from '../images/default_poster.png';
import defaultCastImage from '../images/default_cast.png';
import defaultBGPoster from '../images/default_background.png';

export const ratingConvert = rating => Array.from({ length: rating }, () => '✯').join('');

export const formatDate = date => moment(date).format('DD MMM YYYY');

export const formatDateTime = dateTime => moment(dateTime).format('DD MMM YYYY HH:mm:ss');

export const formatAvatar = avatar => {
  if (!avatar) return defaultReviewAuthorImage;

  const arr = Array.from(avatar);
  arr.shift();
  if (arr.length <= 31) return `https://image.tmdb.org/t/p/w500/${arr.join('')}`;

  return arr.join('');
};

export const ToStringConverter = obj => obj?.map(elem => elem.name).join(', ');

export const formatPoster = poster => poster ? `https://image.tmdb.org/t/p/w500${poster}` : defaultPosterImage;

export const formatFoto = poster => poster ? `https://image.tmdb.org/t/p/w500${poster}` : defaultCastImage;

export const formatBGPoster = bg => {
  if (bg === null) return `url(${defaultBGPoster})`;
  return `url(https://image.tmdb.org/t/p/original/${bg})`;
};