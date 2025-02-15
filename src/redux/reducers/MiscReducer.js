import { createSlice } from '@reduxjs/toolkit';
import { miscState } from './initialState';

const miscReducer = createSlice({
  name: 'misc',
  initialState: miscState,
  reducers: {
    setFilters: (state, action) => {
      state.filters = action.payload;
    },
    setBanners: (state, action) => {
      state.banners = action.payload;
    },
  },
});

export const { setFilters, setBanners } = miscReducer.actions;
export const selectFilters = (state) => state.misc.filters;
export const selectBanners = (state) => state.misc.banners;

export default miscReducer.reducer;
