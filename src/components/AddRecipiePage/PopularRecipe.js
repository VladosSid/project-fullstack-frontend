import { useState } from 'react';
import { Title } from './RecipeIngridientsFields.styled';
import { Col, Label, Recipe, Thumb, Desc, Recipes, Popular } from './PopularRecipe.styled';
import RECIPE from './recipes.json';

const PopularRecipe = () => {
  const [recipes, setRecipes] = useState([]);
  if(!recipes.length) {
    setRecipes(RECIPE)
  }
console.log(recipes)

  return (
    <Popular>
      <Title>Popular Recipe</Title>
      <Recipes>
        {recipes && recipes.map(({ title, description, thumb }) => (
          <Recipe key={title}>
            <Thumb src={thumb} alt={title} />
            <Col>
            <Label>{title}</Label>
            <Desc>{description}</Desc>
            </Col>
          </Recipe>
        ))}
      </Recipes>
    </Popular>
  );
};

export default PopularRecipe;
