import React, { useState } from 'react';
import { SearchesForm, SearchInput, SearchBtn } from './SearchForm.styled';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
//------------------------------------------
export default function SearchForm({
  // green,
  onSubm,
  // marginBottom,
  searchQuery,
  // marginTop,
  isSearchPage,
}) {
  const [searchWord, setSearchWord] = useState(searchQuery || '');

  const handleChange = evt => {
    setSearchWord(evt.currentTarget.value);
  };

  const handleSubmit = evt => {
    evt.preventDefault();

    if (searchWord.trim() === '') {
      // setSearchWord('');
      setSearchWord('');
      Notify.warning('Please fill the search form');

      //   return;
    }

    onSubm(searchWord);
  };
  return (
    <SearchesForm
      onSubmit={handleSubmit}
      page={isSearchPage ? 'search' : 'main'}
    >
      <SearchInput
        placeholder="Beef"
        value={searchWord}
        onChange={handleChange}
        page={isSearchPage ? 'search' : 'main'}
      />
      <SearchBtn page={isSearchPage ? 'search' : 'main'}>Search</SearchBtn>
    </SearchesForm>
  );
}
