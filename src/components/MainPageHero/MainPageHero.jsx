import SearchForm from 'components/SearchForm';
import React from 'react';
import { MPHeroWrapper } from './MainPageHero.styled';

// import { useSearchParams } from 'react-router-dom';

export default function MainPageHero({ onSubm }) {
  // const [searchParams, setSearchParams] = useSearchParams();
  // const queryFilm = searchParams.get('query');

  return (
    <MPHeroWrapper>
      <SearchForm onSubm={onSubm} />
    </MPHeroWrapper>
  );
}
