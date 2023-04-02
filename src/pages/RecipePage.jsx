import RecipeInngredientsList from 'Components/Recipe/RecipeInngredientsList/RecipeInngredientsList';

import RecipePageHero from 'Components/Recipe/RecipePageHero/RecipePageHero';
import RecipePreparation from 'Components/Recipe/RecipePreparation/RecipePreparation';

const RecipePage = () => {
  const { id } = useParams();

  useEffect(() => {
    dispatch(getRecipe(id));
  }, [dispatch, id]);

  return (
    <Container>
      <RecipePageHero title={title} description={description} time={time} />
      <RecipeInngredientsList ingredients={ingredients} recipeId={_id} />
      <RecipePreparation
        preview={preview}
        title={title}
        instructions={instructions}
      />
    </Container>
  );
};

export default RecipePage;
