import instanceBacEnd from '../requestBackEnd';

// получить список 4 категорий с рецептами
// кол-во рецептов завист от параметра query
const queryRecipeMinePage = async quantity => {
  try {
    const { data } = await instanceBacEnd.get(
      `/recipes/main-page?query=${quantity}`
    );
    return data;
  } catch (err) {
    return err.response.data.message;
  }
};

// получуть рецепты по названию категории
const queryRecipeCategori = async category => {
  try {
    const { data } = await instanceBacEnd.get(`/recipes/category/${category}`);

    return data;
  } catch (err) {
    return err.response.data.message;
  }
};

// получить один рецепт по id
// приймає id рецепта в форматі рядка "235718184621948"
const queryRecipeId = async id => {
  try {
    const { data } = await instanceBacEnd.get(`/recipes/${id}`);

    return data;
  } catch (err) {
    return err.response.data.message;
  }
};

// підписка на розсилку
const querySubscribe = async email => {
  try {
    const { data } = await instanceBacEnd.post(`/subscribe`, { email });
    console.log(data);
    return data;
  } catch (err) {
    return err.response.data.message;
  }
};

// отримати список своїх рецептів
const queryFavorite = async () => {
  try {
    const { data } = await instanceBacEnd.get(`/ownRecipes`);
    return data;
  } catch (err) {
    return err.response.data.message;
  }
};

// получить весь список категорий
const queryCategoryList = async () => {
  try {
    const { data } = await instanceBacEnd.get('/recipes/category-list');
    return data;
  } catch (err) {
    return err.response.data.message;
  }
};

// const queryFavoriteDelete = async id => {
//   try {
//     const { data } = await instanceBacEnd.delete(`/ownRecipes`, { id });
//     return data.result;
//   } catch (err) {
//     console.log(err.message);
//   }
// };

// повертає масив страв за данними пошуку
// приймає type запиту(ingredients або title); запит query; page сторінка; limit ліміт на 1 сторінкі
const querySearch = async (type, query, limit = 6, page = 1) => {
  try {
    const { data } = await instanceBacEnd.get(
      `/search?page=${page}&limit=${limit}&query=${query}&type=${type}`
    );
    console.log(data);
    return data;
  } catch (err) {
    console.log(err.message);
  }
};

const queryBackEnd = {
  queryRecipeMinePage,
  queryRecipeCategori,
  queryRecipeId,
  querySubscribe,
  queryFavorite,
  queryCategoryList,
  querySearch,
};

export default queryBackEnd;
