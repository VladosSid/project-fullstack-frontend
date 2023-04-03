import React from 'react';

import {
  CustomSelect,
  CustomSelectBox,
  SearchTypeSpan,
} from './SearchTypeSelector.styled';

const options = [
  { value: 'query', label: 'Title' },
  { value: 'ingredient', label: 'Ingredients' },
];

const SearchTypeSelector = ({ selectedValue, onChange }) => (
  <CustomSelectBox>
    <SearchTypeSpan>Search by:</SearchTypeSpan>
    <CustomSelect
      className="react-select-container"
      classNamePrefix="react-select"
      options={options}
      value={options.find(option => option.value === selectedValue)}
      onChange={option => onChange(option.value)}
    />
  </CustomSelectBox>
);
export default SearchTypeSelector;
