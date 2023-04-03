import SearchForm from 'components/SearchForm/SearchForm';
import React, { useState } from 'react';
import { recipesG } from 'gannaFakeData';
import DishCard from 'components/DishCard/DishCard';
import { useLocation } from 'react-router-dom';
import { ContainerWrapper, Container, SearchBar } from './Searchpage.styled';
import { useSearchParams } from 'react-router-dom';
import SearchTypeSelector from 'components/SearchTypeSelector/SearchTypeSelector';

export default function SearchPage() {
  const location = useLocation();
  // const [searchParams, setSearchParams] = useSearchParams();
  // const searchQuery = searchParams.get('query');
  const [searchParams] = useSearchParams();
  const searchQueryF = searchParams.get('query');
  console.log('in SP', searchQueryF);
  //---------------------------
  const [searchType, setSearchType] = useState('query');
  // const [searchQuery, setSearchQuery] = useState('');
  // const [searchIngredient, setSearchIngredient] = useState('');

  const handleSearchTypeChange = value => {
    setSearchType(value);
  };

  // const handleQueryChange = event => {
  //   setSearchQuery(event.target.value);
  // };

  // const handleIngredientChange = event => {
  //   setSearchIngredient(event.target.value);
  // };

  const handleSubmit = event => {
    event.preventDefault();
    // отправка запроса на бекенд с использованием searchType, searchQuery или searchIngredient
  };
  //----------------------------
  return (
    <ContainerWrapper>
      <SearchForm green marginBottom />
      <SearchBar onSubmit={handleSubmit}>
        <SearchTypeSelector
          selectedValue={searchType}
          onChange={handleSearchTypeChange}
        />
        {/* {searchType === 'query' ? (
          <input type="text" value={searchQuery} onChange={handleQueryChange} />
        ) : (
          <input
            type="text"
            value={searchIngredient}
            onChange={handleIngredientChange}
          />
        )} */}
      </SearchBar>
      <Container>
        {recipesG.map(recipe => (
          <DishCard key={recipe._id} location={location} recipe={recipe} />
        ))}
      </Container>
    </ContainerWrapper>
  );
}

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
