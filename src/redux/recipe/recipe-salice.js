import { createSlice } from '@reduxjs/toolkit';
import recipeOperations from './recipe-operations';

const initialState = {
  allIngredients: null,
  error: null,
};

export const recipeSlice = createSlice({
  name: 'recipe',
  initialState,
  extraReducers: {
    // allIngredients
    [recipeOperations.allIngredients.fulfilled](state, action) {
      state.allIngredients = [...action.payload.data];
    },
    [recipeOperations.allIngredients.rejected](state, action) {
      state.error = action.payload;
    },
  },
});

export default recipeSlice.reducer;
