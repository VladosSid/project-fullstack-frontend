import { MainContainer } from '../components/MainContainer/MainContainer';
import CategoriesTabs from '../components/CategoriesTabs/CategoriesTabs';
import { MainPageTitle } from 'components/MainPageTitle/MainPageTitle';

const CategoriesPage = () => {
  const tabsTitles = [
    'Beaf',
    'Breacfast',
    'Chicken',
    'Desserts',
    'Goat',
    'Lamb',
    'Miscellaneous',
    'Pasta',
    'Pork',
    'Seafood',
    'Side',
  ];
  const idCategory = 5;

  return (
    <MainContainer>
      <MainPageTitle title="Categories" />
      <CategoriesTabs tabsTitles={tabsTitles} idCategory={idCategory} />
    </MainContainer>
  );
};

export default CategoriesPage;
