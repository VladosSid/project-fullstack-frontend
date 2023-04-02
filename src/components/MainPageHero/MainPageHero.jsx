import SearchBar from 'components/SearchBar';
import React from 'react';

// import { useSearchParams } from 'react-router-dom';

export default function MainPageHero({ onSubm }) {
  // const [searchParams, setSearchParams] = useSearchParams();
  // const queryFilm = searchParams.get('query');

  return (
    <div>
      <SearchBar onSubm={onSubm} />
    </div>
  );
}
