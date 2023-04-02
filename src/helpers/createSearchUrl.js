export default function createsearchUrl(query) {
  const searchWord = query.toLowerCase();
  const encodedSearchTerm = encodeURIComponent(searchWord);

  const searchUrl = `/search?query=${encodedSearchTerm}`;
  //   navigate(`/search?type=${searchType}&term=${encodedSearchTerm}`);
  console.log('searchUrl', searchUrl);
  return searchUrl;
}
