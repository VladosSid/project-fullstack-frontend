import SearchForm from 'components/SearchForm';
import React from 'react';
import { MPHeroBG, MPHeroText } from './MainPageHero.styled';

// import { useSearchParams } from 'react-router-dom';

export default function MainPageHero({ onSubm }) {
  // const [searchParams, setSearchParams] = useSearchParams();
  // const queryFilm = searchParams.get('query');

  return (
    <MPHeroBG>
      <MPHeroText>
        "What to cook?" is not only a recipe app, it is, in fact, your cookbook.
        You can add your own recipes to save them for the future.
      </MPHeroText>
      <SearchForm onSubm={onSubm} />
    </MPHeroBG>
  );
}
