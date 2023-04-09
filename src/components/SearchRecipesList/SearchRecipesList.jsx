import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
// import { useLocation } from 'react-router-dom';
// import axios from 'axios';
// import RecipesList from './RecipesList';
import DishCard from 'components/DishCard/DishCard';
import instanceBacEnd from 'helpers/requestBackEnd';
import {
  GridContainer,
  SRLNoItems,
  SRLNoItemsText,
  ErrorComponent,
  imgNoItems,
} from './SearchRecipesList.styled';
import search_mob from '../../images/mainPagePhoto/search_mob_opt.png';
import search_tabl from '../../images/mainPagePhoto/search_tabl_opt.png';
//-------------------------
export default function SearchRecipesList({ searchQuery, searchType }) {
  const location = useLocation();
  // const [searchValue, setSearchValue] = useState('');
  // const [searchType, setSearchType] = useState('query');
  const [recipes, setRecipes] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log('in new effect', searchType, searchQuery);
    const processedValue = searchQuery.trim().replace(/ +/g, '%20');
    instanceBacEnd.defaults.headers.common.Authorization =
      'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDJkZDdmODlmN2I0N2RlNDk0OGI4ZDIiLCJpYXQiOjE2ODA4NzUxOTF9.4A3dgm3_3EJIMfFCD7WFd2VAM_iDXJ0MWGaA9UAg_uk';
    instanceBacEnd
      .get(`/search/?query=${processedValue}&type=${searchType}`)
      .then(function (response) {
        setRecipes(response.data.result.data);
        setError(null);
      })
      .catch(function (error) {
        if (error.response && error.response.status === 404) {
          setError(
            <ErrorComponent>
              "There is no such ingredient. Try something else... "{' '}
            </ErrorComponent>
          );
        } else {
          setError(<ErrorComponent message="An error occurred" />);
        }
      });
  }, [searchQuery, searchType]);
  console.log('recipes', recipes);
  return (
    <>
      {error ? (
        <SRLNoItems>
          <SRLNoItemsText>
            <ErrorComponent>
              There is no such ingredient. Try something else...
            </ErrorComponent>
          </SRLNoItemsText>
        </SRLNoItems>
      ) : !recipes.length ? (
        <SRLNoItems>
          <SRLNoItemsText>Try looking for something else...</SRLNoItemsText>
        </SRLNoItems>
      ) : (
        <>
          <GridContainer>
            {recipes.map(recipe => (
              <DishCard key={recipe._id} location={location} recipe={recipe} />
            ))}
          </GridContainer>
          <div>Pagination</div>
        </>
      )}
    </>
  );
}

//<RecipesList recipes={recipes} />
//searchQuery.query.toLowerCase()
