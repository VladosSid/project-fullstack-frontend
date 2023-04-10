import {
  HeroContainer,
  HeroTiile,
  HeroText,
  CookingTime,
  HeroButtonAdd,
} from './RecipePageHero.styled';

export const RecipePageHero = ({ title, description, time }) => {
  return (
    <HeroContainer>
      <HeroTiile>{title}</HeroTiile>
      <HeroText>{description}</HeroText>
      <HeroButtonAdd>Add to favorite recipes</HeroButtonAdd>
      <CookingTime>{time} min</CookingTime>
    </HeroContainer>
  );
};
