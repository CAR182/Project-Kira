import { createSlice } from '@reduxjs/toolkit';
import { userState } from './initialState';

const userSlice = createSlice({
  name: 'user',
  initialState: userState,
  reducers: {
    setUserLoginDetails: (state, action) => {
      state.name = action.payload.name;
      state.avatar = action.payload.avatar;
    },
    setSignOutState: (state) => {
      state.name = null;
      state.avatar = null;
    },
  },
});

export const { setUserLoginDetails, setSignOutState } = userSlice.actions;
export const selectUserName = (state) => state.user.name;
export const selectUserAvatar = (state) => state.user.avatar;

export default userSlice.reducer;
