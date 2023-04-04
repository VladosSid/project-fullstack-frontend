import instanceBacEnd from '../requestBackEnd';

// получить список 4 категорий с рецептами
// кол-во рецептов завист от параметра query
const queryRecipeMinePage = async quantity => {
  try {
    const { data } = await instanceBacEnd.get(
      `/recipes/main-page?query=${quantity}`
    );
    return data.result.data;
  } catch (err) {
    console.log(err.message);
  }
};

// получуть рецепты по названию категории
const queryRecipeCategori = async category => {
  try {
    const { data } = await instanceBacEnd.get(`/recipes/category/${category}`);

    return data.result;
  } catch (err) {
    console.log(err.message);
  }
};

// получить один рецепт по id
const queryRecipeId = async id => {
  try {
    const { data } = await instanceBacEnd.get(`/recipes/${id}`);

    return data.result;
  } catch (err) {
    console.log(err.message);
  }
};

// підписка на розсилку
const querySubscribe = async email => {
  try {
    await instanceBacEnd.post(`/subscribe`, { email });

    return 'Completed';
  } catch (err) {
    console.log(err.message);
  }
};

// отримати список своїх рецептів
const queryFavorite = async () => {
  try {
    const { data } = await instanceBacEnd.get(`/ownRecipes`);
    return data.result.data;
  } catch (err) {
    console.log(err.message);
  }
};

// получить весь список категорий
const queryCategoryList = async () => {
  try {
    const { data } = await instanceBacEnd.get('/recipes/category-list');
    return data.result.data;
  } catch (err) {
    console.log(err.message);
  }
};

// const queryFavoriteDelete = async id => {
//   try {
//     const { data } = await instanceBacEnd.delete(`/ownRecipes`, { email });
//     return data.result.data;
//   } catch (err) {
//     console.log(err.message);
//   }
// };

const queryBackEnd = {
  queryRecipeMinePage,
  queryRecipeCategori,
  queryRecipeId,
  querySubscribe,
  queryFavorite,
  queryCategoryList,
};

export default queryBackEnd;
