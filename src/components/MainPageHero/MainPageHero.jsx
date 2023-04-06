import SearchForm from 'components/SearchForm';
import React from 'react';
import { MPHeroWrapper, MPHeroBG } from './MainPageHero.styled';

// import { useSearchParams } from 'react-router-dom';

export default function MainPageHero({ onSubm }) {
  // const [searchParams, setSearchParams] = useSearchParams();
  // const queryFilm = searchParams.get('query');

  return (
    <MPHeroBG>
      <MPHeroWrapper>
        <SearchForm onSubm={onSubm} marginTop />
      </MPHeroWrapper>
    </MPHeroBG>
  );
}
