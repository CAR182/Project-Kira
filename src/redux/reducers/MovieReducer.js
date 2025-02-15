import { createSlice } from '@reduxjs/toolkit';
import { movieState } from './initialState';

const movieSlice = createSlice({
  name: 'movie',
  initialState: movieState,
  reducers: {
    setMovies: (state, action) => {
      state.movies = action.payload.movies;
    },
  },
});

export const { setMovies } = movieSlice.actions;
export const selectMovies = (state) => state.movie.movies;

export default movieSlice.reducer;
