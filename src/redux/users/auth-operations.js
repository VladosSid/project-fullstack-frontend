import { createAsyncThunk } from '@reduxjs/toolkit';
import Notiflix from 'notiflix';

import instanceBacEnd from '../../helpers/requestBackEnd';

const token = {
  set(token) {
    instanceBacEnd.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    instanceBacEnd.defaults.headers.common.Authorization = '';
  },
};

const register = createAsyncThunk(
  'auth/registrateUser',
  async (userData, thunkAPI) => {
    try {
      const { data } = await instanceBacEnd.post('/users/signup', userData);
      console.log(data);
      // token.set(data.token);

      Notiflix.Notify.success(`Account successfully created.`);
      return data;
    } catch (error) {
      Notiflix.Notify.failure('Account creation error!!!');
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const operations = {
  register,
  //   logIn,
  //   logOut,
  //   fetchCurrentUser,
};
export default operations;
