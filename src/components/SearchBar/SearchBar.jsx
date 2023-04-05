import React from 'react';
import SearchForm from 'components/SearchForm/SearchForm';
import { SearchBarWrapper, SearchTypeSelectorBox } from './SearchBar.styled';
import SearchTypeSelector from 'components/SearchTypeSelector/SearchTypeSelector';

//-------------
export default function SearchBar(props) {
  const { onTypeChange, selectedType, onSubm, searchQuery } = props;

  return (
    <SearchBarWrapper>
      <SearchForm
        green
        onSubm={onSubm}
        marginBottom
        searchQuery={searchQuery}
      />
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
    </SearchBarWrapper>
  );
}
//function handleSubmit(query) {
//     onSearch(query);
//   }
// function handleTypeChange(type) {
//   onTypeChange(type);
// }
