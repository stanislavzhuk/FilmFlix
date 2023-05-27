import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = 'ab7c8e3be151e2a634eb03e6c55db2da';

// список найпопулярніших фільмів на сьогодні для створення колекції на головній сторінці.
export const getTrendingMovies = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/trending/movie/day?api_key=${API_KEY}`);
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
};

// пошук фільму за ключовим словом на сторінці фільмів.
export const searchMovies = async (query) => {
  try {
    const response = await axios.get(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}&page=1`);
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
};

// запит повної інформації про фільм для сторінки кінофільму.
export const getMovieDetails = async (movieId) => {
  try {
    const response = await axios.get(`${BASE_URL}/movie/${movieId}?api_key=${API_KEY}`);
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
};

// запит інформації про акторський склад для сторінки кінофільму.
export const getMovieCredits = async (movieId) => {
  try {
    const response = await axios.get(`${BASE_URL}/movie/${movieId}/credits?api_key=${API_KEY}`);
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
};

// запит оглядів для сторінки кінофільму.
export const getMovieReviews = async (movieId) => {
  try {
    const response = await axios.get(`${BASE_URL}/movie/${movieId}/reviews?api_key=${API_KEY}`);
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
};