import {
  HeroContainer,
  HeroTiile,
  HeroText,
  CookingTime,
  HeroButtonAdd,
  HeroButtonDel,
} from './RecipePageHero.styled';
import { UseSvg } from '../../../helpers/useSvg/useSvg';

export const RecipePageHero = ({ title, description, time }) => {
  return (
    <HeroContainer>
      <HeroTiile>{title}</HeroTiile>
      <HeroText>{description}</HeroText>
      <HeroButtonAdd>Add to favorite recipes</HeroButtonAdd>
      <HeroButtonDel>Del from favorite recipes</HeroButtonDel>
      <CookingTime>
        <UseSvg id="Time" />
        {time} min
      </CookingTime>
    </HeroContainer>
  );
};
