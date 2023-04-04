import { createAsyncThunk } from '@reduxjs/toolkit';

import instanceBacEnd from '../../helpers/requestBackEnd';

const allIngredients = createAsyncThunk(
  'recipe/allIngredients',
  async (_, thunkAPI) => {
    try {
      const { data } = await instanceBacEnd.get('/ingredients/list');
      return data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);
const operations = {
  allIngredients,
};
export default operations;
