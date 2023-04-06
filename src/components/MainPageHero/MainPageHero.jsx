import { BsArrowRight } from 'react-icons/bs';
import SearchForm from 'components/SearchForm';
import React from 'react';
import {
  MPHeroBG,
  MPHeroText,
  MPHeroProduct,
  GreenSpan,
  StyledLink,
  MPHeroTitle,
} from './MainPageHero.styled';

// import { useSearchParams } from 'react-router-dom';
//---------------------------------------------
export default function MainPageHero({ onSubm }) {
  // const [searchParams, setSearchParams] = useSearchParams();
  // const queryFilm = searchParams.get('query');

  return (
    <MPHeroBG>
      <MPHeroTitle>
        So<span>Yummy</span>
      </MPHeroTitle>
      <MPHeroText>
        "What to cook?" is not only a recipe app, it is, in fact, your cookbook.
        You can add your own recipes to save them for the future.
      </MPHeroText>
      <SearchForm onSubm={onSubm} />
      <MPHeroProduct>
        <div>
          <GreenSpan>Delicious and healthy </GreenSpan>
          <span>
            way to enjoy a <br /> variety of fresh ingredients in one <br />
            satisfying meal
          </span>
        </div>

        <StyledLink to="/categories/breakfast">
          <span>See recipes</span>{' '}
          <BsArrowRight style={{ marginLeft: '7px' }} />
        </StyledLink>
      </MPHeroProduct>
    </MPHeroBG>
  );
}
