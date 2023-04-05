import {
  Container,
  HeroTiile,
  HeroText,
  CookingTime,
} from './RecipePageHero.styled';

export const RecipePageHero = () => {
  return (
    <Container>
      <HeroTiile>Salmon Avocado Salad</HeroTiile>
      <HeroText>
        Is a healthy salad recipe that’s big on nutrients and flavor. A moist,
        pan seared salmon is layered on top of spinach, avocado, tomatoes, and
        red onions. Then drizzled with a homemade lemon vinaigrette.
      </HeroText>
      <CookingTime>20min</CookingTime>
    </Container>
  );
};
