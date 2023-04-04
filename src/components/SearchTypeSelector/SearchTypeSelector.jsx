import React from 'react';

import {
  CustomSelect,
  CustomSelectBox,
  SearchTypeSpan,
} from './SearchTypeSelector.styled';

export default function SearchTypeSelector({ onChange, selectedType }) {
  const options = [
    { value: 'query', label: 'Title' },
    { value: 'ingredient', label: 'Ingredients' },
  ];

  function handleChange(option) {
    onChange(option.value);
  }
  return (
    <>
      <CustomSelectBox>
        <SearchTypeSpan>Search by:</SearchTypeSpan>
        <CustomSelect
          className="react-select-container"
          classNamePrefix="react-select"
          options={options}
          value={options.find(option => option.value === selectedType)}
          onChange={handleChange}
        />
      </CustomSelectBox>
      {/* <Select
        options={options}
        value={selectedOption}
        onChange={handleChange}
        styles={customStyles}
      /> */}
    </>
  );
}
// const customStyles = {
//   dropdownIndicator: (provided, state) => ({
//     ...provided,
//     color: '#8BAA36',
//   }),
// };
