import {
  List,
  Item,
  ImageContainer,
  ItemContainer,
  TitleProduct,
  NumberContainer,
  Remove,
  RemoveSvg,
} from './IngredientsShoppingList.styled';
import UseSvg from '../../helpers/useSvg/useSvg';
// import axios from 'axios';
import queryBackEnd from '../../helpers/request/queryBackEnd';



const IngredientsShoppingList = ({ ingredients, setIngredientS }) => {
  const deleteIngradient =  contactId => {
       queryBackEnd
      .queryRemoveShoppingList({ shoppingListIng: contactId })
         .then(response => {
           console.log('response', response);
          //  setIngredientS(prevState => prevState.map());

      });
  };
  // console.log("4", ingredients);

  return (
    <List>
      {/* <div>test</div> */}
      {ingredients.map(ingredient => (
        <Item key={ingredient._id}>
          <ItemContainer>
            <ImageContainer>
              <img src={ingredient.imageUrl} alt="ingredient" />
            </ImageContainer>
            <TitleProduct>{ingredient.title}</TitleProduct>
            <NumberContainer>5</NumberContainer>
            <Remove>
              <RemoveSvg
                onClick={() => {
                  console.log(ingredient._id);
                  deleteIngradient(ingredient._id);
                }}
              >
                <UseSvg id="remove" />
              </RemoveSvg>
            </Remove>
          </ItemContainer>
        </Item>
      ))}
    </List>
  );
};
export default IngredientsShoppingList;
