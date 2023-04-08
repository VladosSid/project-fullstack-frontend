import { MainContainer } from '../components/MainContainer/MainContainer';
import CategoriesTabs from '../components/CategoriesTabs/CategoriesTabs';
import { useState, useEffect } from 'react';
import queryBackEnd from '../helpers/request/queryBackEnd';
import { MainPageTitle } from '../components/MainPageTitle/MainPageTitle';

const CategoriesPage = () => {
  const idCategory = 2;
  const [tabsTitlesQ, setTabsTitlesQ] = useState([]);

  // Get all categories
  useEffect(() => {
    const fetchData = async () => {
      await queryBackEnd
        .queryCategoryList()
        .then(data => setTabsTitlesQ(data.result.data))
        .catch(error => console.log(error.message));
    };
    fetchData();
  }, []);

  return (
    <MainContainer>
      <MainPageTitle title="Categories" />
      <CategoriesTabs tabsTitlesQ={tabsTitlesQ} idCategory={idCategory} />
    </MainContainer>
  );
};

export default CategoriesPage;
