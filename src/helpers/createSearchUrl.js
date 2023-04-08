export function createSearchUrl(queryWord, type = 'title') {
  // const searchWord = queryWord.toLowerCase();
  const processedValue = queryWord.trim().replace(/ +/g, '%20');
  // const encodedSearchTerm = encodeURIComponent(processedValue);
  const searchUrl = `/search?query=${processedValue}&type=${type}`;

  return searchUrl;
}
export function createCategoryUrl(category) {
  // const categoryWord = category.toLowerCase();
  // const categoryUrl = `/categories/${categoryWord}`;
  const categoryUrl = `categories/${category.toLowerCase()}`;
  //   navigate(`/search?type=${searchType}&term=${encodedSearchTerm}`);
  console.log('categoryUrl', categoryUrl);
  return categoryUrl;
}
