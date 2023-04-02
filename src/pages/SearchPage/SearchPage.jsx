import SearchBar from 'components/SearchBar/SearchBar';
import React from 'react';
// import { useLocation } from 'react-router-dom';
import { ContainerWrapper } from './Searchpage.styled';
import { useSearchParams } from 'react-router-dom';
export default function SearchPage() {
  // const location = useLocation();
  // const [searchParams, setSearchParams] = useSearchParams();
  // const searchQuery = searchParams.get('query');
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get('query');

  console.log('In SP query', searchQuery);
  return (
    <ContainerWrapper>
      <SearchBar />;
    </ContainerWrapper>
  );
}
