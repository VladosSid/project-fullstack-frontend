const getAllCategory = store => store.recipe.categoriList;
const getAllIngredients = store => store.recipe.allIngredients;

const recipeSelectors = {
  getAllCategory,
  getAllIngredients,
};
export default recipeSelectors;
