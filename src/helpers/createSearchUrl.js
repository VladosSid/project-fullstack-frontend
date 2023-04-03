export function createSearchUrl(query) {
  const searchWord = query.toLowerCase();
  const encodedSearchTerm = encodeURIComponent(searchWord);

  const searchUrl = `/search?query=${encodedSearchTerm}`;
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
