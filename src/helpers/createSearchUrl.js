export function createSearchUrl(queryWord, type = 'title') {
  const processedValue = queryWord.trim().replace(/ +/g, '%20');

  const searchUrl = `/search?query=${processedValue}&type=${type}`;

  return searchUrl;
}
export function createCategoryUrl(category = 'Beef') {
  const categoryUrl = `/categories/${category}`;
  return categoryUrl;
}
