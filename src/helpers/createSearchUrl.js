export function createSearchUrl(queryWord, type = 'query') {
  const searchWord = queryWord.toLowerCase();
  const encodedSearchTerm = encodeURIComponent(searchWord);

  const searchUrl = `/search?query=${encodedSearchTerm}&type=${type}`;
  //   navigate(`/search?type=${searchType}&term=${encodedSearchTerm}`);
  console.log('searchUrl', searchUrl);
  return searchUrl;
}
export function createCategoryUrl(category) {
  // const categoryWord = category.toLowerCase();
  // const categoryUrl = `/categories/${categoryWord}`;
  const categoryUrl = `/categories`;
  //   navigate(`/search?type=${searchType}&term=${encodedSearchTerm}`);
  console.log('categoryUrl', categoryUrl);
  return categoryUrl;
}
