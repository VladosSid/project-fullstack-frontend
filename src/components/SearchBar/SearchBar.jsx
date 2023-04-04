import React, { useState } from 'react';
import SearchForm from 'components/SearchForm/SearchForm';
import { SearchTypeSelectorBox } from './SearchBar.styled';
import SearchTypeSelector from 'components/SearchTypeSelector/SearchTypeSelector';

//-------------
export default function SearchBar({ onSubm }) {
  const [searchValue, setSearchValue] = useState('');
  const [searchType, setSearchType] = useState('query');

  const handleSearchTypeChange = value => {
    setSearchType(value);
  };
  //   const handleSubmit = event => {
  //     event.preventDefault();
  //     // отправка запроса на бекенд с использованием searchType, searchQuery или searchIngredient
  //   };

  return (
    <>
      <SearchForm green onSubm={onSubm} marginBottom />
      <SearchTypeSelectorBox>
        <SearchTypeSelector
          selectedValue={searchType}
          onChange={handleSearchTypeChange}
        />
        {/* {searchType === 'query' ? (
          <input type="text" value={searchQuery} onChange={handleQueryChange} />
        ) : (
          <input
            type="text"
            value={searchIngredient}
            onChange={handleIngredientChange}
          />
        )} */}
      </SearchTypeSelectorBox>
    </>
  );
}
