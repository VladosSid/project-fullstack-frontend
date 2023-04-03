import { createSlice } from '@reduxjs/toolkit';
import authOperations from './auth-operations';

const initialState = {
  user: { name: null, email: null, avatar: null },
  token: null,
  isLoggedIn: false,
  error: null,
  isGetingCurentUser: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [authOperations.register.fulfilled](state, action) {
      console.log(state);
      console.log(action.payload);
      state.user = { ...action.payload.user };
      state.token = action.payload.token;
      state.isLoggedIn = true;
      console.log(state);
    },
    [authOperations.register.rejected](state, action) {
      state.error = action.payload;
    },
  },
});

export default authSlice.reducer;
