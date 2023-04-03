// import { FaSistrix } from 'react-icons/fa';
import React, { useState } from 'react';
import { SearchesForm, SearchInput, SearchBtn } from './SearchForm.styled';
//------------------------------------------
export default function SearchForm({ green, onSubm }) {
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
    <SearchesForm onSubmit={handleSubmit}>
      <SearchInput
        placeholder="Beef"
        value={searchWord}
        onChange={handleChange}
      />
      <SearchBtn green={green}>Search</SearchBtn>
    </SearchesForm>
  );
}
