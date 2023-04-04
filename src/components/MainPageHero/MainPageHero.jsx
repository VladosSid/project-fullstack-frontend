import SearchForm from 'components/SearchForm';
import React from 'react';

// import { useSearchParams } from 'react-router-dom';

export default function MainPageHero({ onSubm }) {
  // const [searchParams, setSearchParams] = useSearchParams();
  // const queryFilm = searchParams.get('query');

  return (
    <div>
      <SearchForm onSubm={onSubm} />
    </div>
  );
}
