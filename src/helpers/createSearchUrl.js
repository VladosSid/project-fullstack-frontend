export function createSearchUrl(queryWord, type = 'title') {
  const searchWord = queryWord.toLowerCase();
  const encodedSearchTerm = encodeURIComponent(searchWord);

  const searchUrl = `/search?query=${encodedSearchTerm}&type=${type}`;
  console.log('searchUrl', searchUrl);
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
