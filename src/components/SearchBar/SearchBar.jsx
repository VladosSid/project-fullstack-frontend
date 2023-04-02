// import { FaSistrix } from 'react-icons/fa';
import React, { useState } from 'react';
import { SearchForm, SearchInput, SearchBtn } from './SearchBar.styled';
//------------------------------------------
export default function SearchBar({ green, onSubm }) {
  const [searchWord, setSearchWord] = useState('');

  const handleChange = evt => {
    setSearchWord(evt.currentTarget.value);
    // setSearchWord(evt.currentTarget.value.toLowerCase());
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    console.log('in SB');
    if (searchWord.trim() === '') {
      console.log('Please fill the search form ');
      return;
    }

    onSubm(searchWord);
  };
  return (
    <SearchForm onSubmit={handleSubmit}>
      <SearchInput
        placeholder="Beef"
        value={searchWord}
        onChange={handleChange}
      />
      <SearchBtn green={green}>Search</SearchBtn>
    </SearchForm>
  );
}
