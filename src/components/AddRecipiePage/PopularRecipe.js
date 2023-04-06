/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';
import { Title } from './RecipeIngridientsFields.styled';
import {
  Col,
  Label,
  Recipe,
  Thumb,
  Desc,
  Recipes,
  Popular,
} from './PopularRecipe.styled';
import RECIPE from './recipes.json';

const PopularRecipe = () => {
  // eslint-disable-next-line no-unused-vars
  const [recipes, setRecipes] = useState([]);
  const [viewport, setViewport] = useState(window.visualViewport.width);

  useEffect(() => {
    if (viewport >= 1240) {
      setRecipes(RECIPE);
    } else if (viewport < 1240) {
      let arr = RECIPE;
      arr.splice(2);
      setRecipes(arr);
    }
  }, [viewport]);

  return (
    <Popular>
      <Title>Popular Recipe</Title>
      <Recipes>
        {recipes &&
          recipes.map(({ title, description, thumb }) => (
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
