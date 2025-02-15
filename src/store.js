import { configureStore } from '@reduxjs/toolkit';
import movieReducer from 'redux/reducers/MovieReducer';
import userReducer from './redux/reducers/UserReducer';
import miscReducer from './redux/reducers/MiscReducer';

export default configureStore({
  reducer: {
    user: userReducer,
    movie: movieReducer,
    misc: miscReducer,
  },
});
