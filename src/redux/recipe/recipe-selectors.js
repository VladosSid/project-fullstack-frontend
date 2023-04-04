const getAllCategory = store => store.recope.categoriList;
const getAllIngredients = store => store.recope.allIngredients;

const authSelectors = {
  getAllCategory,
  getAllIngredients,
};
export default authSelectors;
