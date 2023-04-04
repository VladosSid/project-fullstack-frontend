import React, { useState } from 'react';
import { recipesG } from 'gannaFakeData';
import DishCard from 'components/DishCard/DishCard';
import { useLocation } from 'react-router-dom';
import { ContainerWrapper, Container } from './Searchpage.styled';
import { useSearchParams } from 'react-router-dom';
import SearchBar from 'components/SearchBar/SearchBar';
import { createSearchUrl } from 'helpers/createSearchUrl';

export default function SearchPage() {
  const location = useLocation();
  // const [searchParams, setSearchParams] = useSearchParams();
  // const searchQuery = searchParams.get('query');
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQueryF = searchParams.get('query');
  console.log('in SP query', searchQueryF);
  //---------------------------

  // const [searchQuery, setSearchQuery] = useState('');
  // const [searchIngredient, setSearchIngredient] = useState('');

  // const handleQueryChange = event => {
  //   setSearchQuery(event.target.value);
  // };

  // const handleIngredientChange = event => {
  //   setSearchIngredient(event.target.value);
  // };
  const handleSubmit = query => {
    console.log('Query in SearchBar', query);

    // const nextQuery = query !== '' ? { query } : {};
    // setSearchParams(nextQuery);
    const searchUrl = createSearchUrl(query);
    console.log('SearchUrl in SearchBar', searchUrl);
  };
  //----------------------------
  return (
    <ContainerWrapper>
      <SearchBar onSubm={handleSubmit} />
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
