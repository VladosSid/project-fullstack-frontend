import SearchBar from 'components/SearchBar';
import React from 'react';

// import { useSearchParams } from 'react-router-dom';

export default function MainPageHero() {
  // const [searchParams, setSearchParams] = useSearchParams();
  // const queryFilm = searchParams.get('query');
  const handleFormSubmit = query => {
    //   const nextQuery = query !== '' ? { query } : {};
    //   setSearchParams(nextQuery);
  };
  return (
    <div>
      <SearchBar onSubm={handleFormSubmit} />
    </div>
  );
}
