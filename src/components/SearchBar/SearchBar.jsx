import React, { useState } from 'react';
import SearchForm from 'components/SearchForm/SearchForm';
import { SearchTypeSelectorBox } from './SearchBar.styled';
import SearchTypeSelector from 'components/SearchTypeSelector/SearchTypeSelector';

//-------------
export default function SearchBar(props) {
  const { onTypeChange, selectedType, onSubm } = props;

  return (
    <>
      <SearchForm green onSubm={onSubm} marginBottom />
      <SearchTypeSelectorBox>
        <SearchTypeSelector
          onChange={onTypeChange}
          selectedType={selectedType}
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
//function handleSubmit(query) {
//     onSearch(query);
//   }
// function handleTypeChange(type) {
//   onTypeChange(type);
// }
