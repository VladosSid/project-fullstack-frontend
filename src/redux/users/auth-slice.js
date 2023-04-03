import { createSlice } from '@reduxjs/toolkit';
import authOperations from './auth-operations';

const initialState = {
  user: {
    name: null,
    email: null,
    avatarURL: null,
    favorites: null,
    shoppingList: null,
  },
  token: null,
  isLoggedIn: false,
  error: null,
  isGetingCurentUser: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    // register
    [authOperations.register.fulfilled](state, action) {
      state.user.email = action.payload.user.email;
      state.user.name = action.payload.user.username;
    },
    [authOperations.register.rejected](state, action) {
      state.error = action.payload;
    },

    // login
    [authOperations.logIn.fulfilled](state, action) {
      state.user.email = action.payload.user.email;
      state.user.name = action.payload.user.username;
      state.user.avatarURL = action.payload.user.avatarURL;

      state.token = action.payload.user.token;
      state.isLoggedIn = true;
    },
    [authOperations.logIn.rejected](state, action) {
      state.error = action.payload;
    },

    // LogOut
    [authOperations.logOut.fulfilled](state) {
      state.user = {
        name: null,
        email: null,
        avatarURL: null,
        favorites: null,
      };
      state.token = null;
      state.isLoggedIn = false;
    },
    [authOperations.logOut.rejected](state, action) {
      state.error = action.payload;
    },

    // current
    [authOperations.fetchCurrentUser.pending](state, action) {
      state.isGetingCurentUser = true;
    },
    [authOperations.fetchCurrentUser.fulfilled](state, action) {
      const { email, username, avatarURL, favorites } = action.payload.user;

      state.user.email = email;
      state.user.name = username;
      state.user.avatarURL = avatarURL;
      state.user.favorites = favorites;

      state.isLoggedIn = true;
      state.isGetingCurentUser = false;
    },
    [authOperations.fetchCurrentUser.rejected](state, action) {
      state.error = action.payload;
      state.isGetingCurentUser = false;
    },
  },
});

export default authSlice.reducer;
