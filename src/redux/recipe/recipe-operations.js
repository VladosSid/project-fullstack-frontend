import { createAsyncThunk } from '@reduxjs/toolkit';

import instanceBacEnd from '../../helpers/requestBackEnd';

const categoryList = createAsyncThunk(
  'recipe/categoriList',
  async (_, thunkAPI) => {
    try {
      const { data } = await instanceBacEnd.get('/recipes/category-list');
      console.log(data.result.data);
      return data.result.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

const allIngredients = createAsyncThunk(
  'recipe/allIngredients',
  async (_, thunkAPI) => {
    try {
      const { data } = await instanceBacEnd.get('/ingredients/list');
      console.log(data);
      return data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);
const operations = {
  categoryList,
  allIngredients,
};
export default operations;
