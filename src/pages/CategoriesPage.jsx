import { MainSection } from '../components/MainSection/MainSection';
import CategoriesTabs from '../components/CategoriesTabs/CategoriesTabs';

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
    <MainSection title="Categories">
      <CategoriesTabs tabsTitles={tabsTitles} idCategory={idCategory} />
    </MainSection>
  );
};

export default CategoriesPage;
