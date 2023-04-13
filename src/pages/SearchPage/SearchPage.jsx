import React, { useState } from 'react';
import { MainPageTitle } from 'components/MainPageTitle/MainPageTitle';
import { MainContainer } from '../../components/MainContainer/MainContainer';
import { ContainerWrapper } from './Searchpage.styled';
import { useSearchParams } from 'react-router-dom';
import SearchBar from 'components/SearchBar/SearchBar';
import SearchRecipesList from 'components/SearchRecipesList/SearchRecipesList';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import BG from '../../images/mainPagePhoto/search_tabl_opt.png';

//-------------------------------
export default function SearchPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState(
    searchParams.get('query') || ''
  );
  const [searchType, setSearchType] = useState(
    searchParams.get('type') || 'title'
  );
  const updatedParams = new URLSearchParams(searchParams.toString());

  //------------
  function handleSearchTypeChange(type) {
    if (searchQuery === '') {
      Notify.warning('Please fill the search form');
    } else {
      const ingredientsLength = searchQuery.match(/\b\w+\b/g)?.length;
      if (type === 'ingredients' && ingredientsLength > 1) {
        Notify.warning('You can only enter one ingredient. ');
      }

      setSearchType(type);
      updatedParams.set('type', type);
      setSearchParams(updatedParams);
    }
  }
  //---------
  function handleSubmit(query) {
    const nextQuery = query !== '' ? query : '';

    if (nextQuery !== '') {
      setSearchQuery(nextQuery);

      setSearchParams({
        query: query.toLowerCase().trim().replace(/\s+/g, ' '),
        type: searchType,
      });
    } else {
      setSearchParams({});
      setSearchQuery('');
    }
  }
  //----------------------------
  return (
    <MainContainer>
      <>
        <MainPageTitle title={'Search'} />
        <SearchBar
          onTypeChange={handleSearchTypeChange}
          onSubm={handleSubmit}
          selectedType={searchType}
          searchQuery={searchQuery}
        />
      </>
      {searchQuery !== '' ? (
        <ContainerWrapper>
          <SearchRecipesList
            searchQuery={searchQuery}
            searchType={searchType}
          />
        </ContainerWrapper>
      ) : (
        <img style={{ margin: '0 auto 40px' }} src={BG} alt="Background" />
      )}
    </MainContainer>
  );
}
