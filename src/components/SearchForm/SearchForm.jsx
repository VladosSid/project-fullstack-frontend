// import { FaSistrix } from 'react-icons/fa';
import React, { useState } from 'react';
import { SearchesForm, SearchInput, SearchBtn } from './SearchForm.styled';
//------------------------------------------
export default function SearchForm({ green, onSubm, marginBottom }) {
  const [searchWord, setSearchWord] = useState('');

  const handleChange = evt => {
    setSearchWord(evt.currentTarget.value);
    // setSearchWord(evt.currentTarget.value.toLowerCase());
  };

  const handleSubmit = evt => {
    evt.preventDefault();

    if (searchWord.trim() === '') {
      console.log('Please fill the search form ');
      return;
    }
    console.log('in SForm', searchWord);
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
