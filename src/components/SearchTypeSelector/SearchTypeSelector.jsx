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

export default function SearchTypeSelector({ selectedValue, onChange }) {
  // const [selectedOption, setSelectedOption] = useState(options[0]);

  // const handleChange = option => {
  //   setSelectedOption(option);
  // };
  return (
    <>
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
