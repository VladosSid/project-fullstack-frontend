import SearchForm from 'components/SearchForm/SearchForm';
import React from 'react';
import { recipesG } from 'gannaFakeData';
import DishCard from 'components/DishCard/DishCard';
import { useLocation } from 'react-router-dom';
import { ContainerWrapper, Container } from './Searchpage.styled';
import { useSearchParams } from 'react-router-dom';
export default function SearchPage() {
  const location = useLocation();
  // const [searchParams, setSearchParams] = useSearchParams();
  // const searchQuery = searchParams.get('query');
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get('query');
  console.log('in SP', searchQuery);

  return (
    <ContainerWrapper>
      <SearchForm green />
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
