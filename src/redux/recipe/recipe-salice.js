import { createSlice } from '@reduxjs/toolkit';
import recipeOperations from './recipe-operations';

const initialState = {
  categoriList: null,
  allIngredients: null,
  error: null,
};

export const recipeSlice = createSlice({
  name: 'recipe',
  initialState,
  extraReducers: {
    // allNameCategory
    [recipeOperations.categoryList.fulfilled](state, action) {
      state.categoriList = [...action.payload];
    },
    [recipeOperations.categoryList.rejected](state, action) {
      state.error = action.payload;
    },

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
