import {
  Box,
  ButtonWrapper,
  Img,
  List,
  ListHeaderText,
  ListItem,
  ListItemHeader,
  Measure,
  Title,
  Wrapper,
} from './RecipeInngredientsList.styled';

const RecipeInngredientsList = ({}) => {
  const list = useSelector(selectList);

  return (
    <Box>
      <List>
        <ListItemHeader>
          <ListHeaderText>Product</ListHeaderText>
          <div>
            <ListHeaderText>Number</ListHeaderText>
            <ListHeaderText>Add to list</ListHeaderText>
          </div>
        </ListItemHeader>
        {ingr?.map(({ _id, ttl, thb, measure }) => {
          const isChecked = list?.some(item => item._id === _id);
          return (
            <ListItem key={_id}>
              <Wrapper>
                <Img alt={ttl} src={thb} width={48} height={48} />
                <Title>{ttl}</Title>
              </Wrapper>
              <ButtonWrapper>
                <Measure>{measure}</Measure>
                <CustomCheckbox
                  recipeId={recipeId}
                  ingredientId={_id}
                  isChecked={isChecked}
                />
              </ButtonWrapper>
            </ListItem>
          );
        })}
      </List>
    </Box>
  );
};

export default RecipeInngredientsList;
