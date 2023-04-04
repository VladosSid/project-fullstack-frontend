import React, { useState } from 'react';
import { SearchesForm, SearchInput, SearchBtn } from './SearchForm.styled';
//------------------------------------------
export default function SearchForm({
  green,
  onSubm,
  marginBottom,
  searchQuery,
}) {
  const [searchWord, setSearchWord] = useState(searchQuery || '');

  const handleChange = evt => {
    setSearchWord(evt.currentTarget.value);
  };

  const handleSubmit = evt => {
    evt.preventDefault();

    if (searchWord.trim() === '') {
      console.log('Please fill the search form ');
      return;
    }

    onSubm(searchWord);
  };
  return (
    <SearchesForm onSubmit={handleSubmit} marginBottom={marginBottom}>
      <SearchInput
        placeholder="Beef"
        value={searchWord}
        onChange={handleChange}
      />
      <SearchBtn green={green}>Search</SearchBtn>
    </SearchesForm>
  );
}
