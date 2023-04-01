import AddRecipieForm from "./AddRecipeForm";
import FollosUs from "./FollowUs";
import PopularRecipe from "./PopularRecipe";
import { Wrap, Col, Title } from "./AddRecipePage.styled"

const AddRecipiePage = () => {
    return(<>
      <Title>Add recipe</Title>
    <Wrap>
  <Col><AddRecipieForm />
</Col>
<Col><FollosUs /><PopularRecipe /></Col>
</Wrap></>
)

}

export default AddRecipiePage
