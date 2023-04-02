import SearchBar from 'components/SearchBar/SearchBar';
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

  console.log('In SP query', searchQuery);
  return (
    <ContainerWrapper>
      <SearchBar green />
      <Container>
        {recipesG.map(recipe => (
          <DishCard key={recipe._id} location={location} recipe={recipe} />
        ))}
      </Container>
    </ContainerWrapper>
  );
}
