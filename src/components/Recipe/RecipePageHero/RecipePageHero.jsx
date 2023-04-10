import {
  HeroContainer,
  HeroTiile,
  HeroText,
  CookingTime,
  HeroButtonAdd,
} from './RecipePageHero.styled';

export const RecipePageHero = ({ title, description }) => {
  return (
    <HeroContainer>
      <HeroTiile>hey{title}</HeroTiile>
      <HeroText>
        {description}
        (Is a healthy salad)
      </HeroText>
      <HeroButtonAdd>Add to favorite recipes</HeroButtonAdd>
      <CookingTime></CookingTime>
    </HeroContainer>
  );
};
