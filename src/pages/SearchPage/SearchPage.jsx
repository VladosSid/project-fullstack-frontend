import React, { useState, useEffect } from 'react';
import { recipesG } from 'gannaFakeData';
import DishCard from 'components/DishCard/DishCard';
import { useLocation } from 'react-router-dom';
import { ContainerWrapper, Container } from './Searchpage.styled';
import { useSearchParams } from 'react-router-dom';
import SearchBar from 'components/SearchBar/SearchBar';
import { createSearchUrl } from 'helpers/createSearchUrl';
import SearchRecipesList from 'components/SearchRecipesList/SearchRecipesList';
//-------------------------------
export default function SearchPage() {
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState(
    searchParams.get('query') || ''
  );

  // const queryFilm = searchParams.get('query');

  const [searchTypeValue, setSearchTypeValue] = useState('');

  const [searchType, setSearchType] = useState(searchParams.get('type'));
  const [searchResults, setSearchResults] = useState([]);

  // useEffect(() => {
  //   const searchParams = new URLSearchParams(location.search);
  //   const query = searchParams.get('query') || '';
  //   const ingredient = searchParams.get('ingredient') || '';
  //   const type = searchParams.get('type') || 'query';
  //   setSearchTypeValue(type === 'query' ? query : ingredient);
  //   setSearchType(type);
  // }, [location.search]);
  // const [searchParams, setSearchParams] = useSearchParams(); my
  // const searchQueryF = searchParams.get('query'); my

  console.log('in SP query', searchQuery);
  //---------------------------
  function handleSearch(query) {
    setSearchQuery(query);
  }
  //------------
  function handleSearchTypeChange(type) {
    console.log('Type in SearchBar', type);
    setSearchType(type);
  }
  //---------
  function handleSubmit(query) {
    console.log('Query in SearchBar', query);
    console.log('Type in handl SearchBar', searchType);
    const nextQuery = query !== '' ? { query } : {};
    setSearchQuery(nextQuery);
    // const nextQuery = query !== '' ? { query } : {};
    // setSearchParams(nextQuery);
    const searchUrl = createSearchUrl(query, searchType);
    console.log('SearchUrl in SearchBar', searchUrl);
  }
  //----------------------------
  return (
    <ContainerWrapper>
      <SearchBar
        onSearch={handleSearch}
        onTypeChange={handleSearchTypeChange}
        onSubm={handleSubmit}
        selectedType={searchType}
      />
      <SearchRecipesList
        searchQuery={searchQuery}
        searchType={searchType}
        searchResults={searchResults}
      />
      <Container>
        {recipesG.map(recipe => (
          <DishCard key={recipe._id} location={location} recipe={recipe} />
        ))}
      </Container>
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
