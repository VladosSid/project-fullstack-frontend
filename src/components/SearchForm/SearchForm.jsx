import React, { useState } from 'react';
import { SearchesForm, SearchInput, SearchBtn } from './SearchForm.styled';
//------------------------------------------
export default function SearchForm({
  green,
  onSubm,
  marginBottom,
  searchQuery,
  marginTop,
  isSearchPage,
}) {
  const [searchWord, setSearchWord] = useState(searchQuery || '');

  const handleChange = evt => {
    setSearchWord(evt.currentTarget.value);
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    console.log('Query in SF submit', searchWord);
    if (searchWord.trim() === '') {
      console.log('Please fill the search form ');
      return;
    }

    onSubm(searchWord);
  };
  return (
    <SearchesForm
      onSubmit={handleSubmit}
      marginBottom={marginBottom}
      marginTop={marginTop}
      page={isSearchPage ? 'search' : 'main'}
    >
      <SearchInput
        placeholder="Beef"
        value={searchWord}
        onChange={handleChange}
        page={isSearchPage ? 'search' : 'main'}
      />
      <SearchBtn green={green} page={isSearchPage ? 'search' : 'main'}>
        Search
      </SearchBtn>
    </SearchesForm>
  );
}
