import React, { useState } from 'react'; //useEffect
import { recipesG } from 'gannaFakeData';
import DishCard from 'components/DishCard/DishCard';
import { useLocation } from 'react-router-dom';
import { ContainerWrapper, Container } from './Searchpage.styled';
import { useSearchParams } from 'react-router-dom';
import SearchBar from 'components/SearchBar/SearchBar';
// import { createSearchUrl } from 'helpers/createSearchUrl';
import SearchRecipesList from 'components/SearchRecipesList/SearchRecipesList';
//-------------------------------
export default function SearchPage() {
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState(
    searchParams.get('query') || ''
  );
  const [searchType, setSearchType] = useState(
    searchParams.get('type') || 'title'
  );
  const updatedParams = new URLSearchParams(searchParams.toString());

  // const [searchResults, setSearchResults] = useState([]);
  const [searchResults] = useState([]);
  //---------------------------
  function handleSearch(query) {
    setSearchQuery(query);
  }
  //------------
  function handleSearchTypeChange(type) {
    setSearchType(type);
    // setSearchParams({ type: type });
    updatedParams.set('type', type);
    if (searchQuery) {
      setSearchParams(updatedParams);
    }
  }
  //---------
  function handleSubmit(query) {
    const nextQuery = query !== '' ? { query } : {};
    setSearchQuery(nextQuery);
    // const searchUrl = createSearchUrl(query, query);!!!!!!!
    setSearchParams({ query: query.toLowerCase(), type: searchType });
  }
  //----------------------------
  return (
    <ContainerWrapper>
      <SearchBar
        onSearch={handleSearch}
        onTypeChange={handleSearchTypeChange}
        onSubm={handleSubmit}
        selectedType={searchType}
        searchQuery={searchQuery}
      />
      {searchQuery !== '' && (
        <SearchRecipesList
          searchQuery={searchQuery}
          searchType={searchType}
          searchResults={searchResults}
        />
      )}
      <div>Pagination</div>
    </ContainerWrapper>
  );
}
//<SearchRecipesList searchQuery={searchQuery} searchType={searchType} searchResults={searchResults} />

// function SearchTypeSelector({ type, onChange }) {
//   function handleSelect(eventKey) {
//     onChange(eventKey);
//   }

//   return (
//     <DropdownButton
//       title={type === 'query' ? 'Поиск по запросу' : 'Поиск по ингредиенту'}
//       onSelect={handleSelect}
//     >
//       <Dropdown.Item eventKey="query">Поиск по запросу</Dropdown.Item>
//       <Dropdown.Item eventKey="ingredient">Поиск по ингредиенту</Dropdown.Item>
//     </DropdownButton>
//   );
// }
