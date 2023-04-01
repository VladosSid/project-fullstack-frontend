// import { FaSistrix } from 'react-icons/fa';
import React from 'react';
import { SearchWrapper, SearchInput, SearchBtn } from './SearchBar.styled';
//------------------------------------------
export default function SearchBar() {
  //   const [searchWord, setSearchWord] = useState('');
  //   const handleChange = evt => {
  //     setSearchWord(evt.currentTarget.value.toLowerCase());
  //   };

  //   const handleSubmit = evt => {
  //     evt.preventDefault();
  //     if (searchWord.trim() === '') {
  //       console.log('Please fill the search form ');
  //       return;
  //     }

  //     // onSubm(searchWord);
  //   };
  return (
    <SearchWrapper>
      <SearchInput placeholder="Beef" />
      <SearchBtn>Search</SearchBtn>
    </SearchWrapper>
  );
}
