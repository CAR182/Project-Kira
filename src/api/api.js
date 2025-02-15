import users from './userData.json';
import movies from './movieData.json';
import misc from './miscData.json';

/* USER API */
export const getUsers = async () => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return users;
};

export const getUser = async (index) => {
  await new Promise((resolve) => setTimeout(resolve, 0));
  return users[index];
};

/* MOVIE API */
export const getMovies = async () => {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return movies;
};

export const getMovie = async (id) => {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return movies.find((movie) => movie.title === id);
};

/* MISC API */
export const getFilters = async () => {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return misc.filters;
};

export const getBanners = async () => {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return misc.banners;
};
