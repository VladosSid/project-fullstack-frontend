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
import axios from 'axios';




const IngredientsShoppingList = ({ingredients}) => {


const deleteIngradient = async (contactId) => {
    try {
      const response = await axios.delete(`/ingradients/${contactId}`);
      return response.data;
    } catch (error) {
      return console.log(error.message);
    }
  }


  const ingredientsArr = ingredients;
  return (
    <List>
      {ingredientsArr.map(ingredient => (
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
