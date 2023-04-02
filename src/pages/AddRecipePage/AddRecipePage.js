import AddRecipieForm from "../../components/AddRecipiePage/AddRecipeForm";
import FollosUs from "../../components/AddRecipiePage/FollowUs";
import PopularRecipe from "../../components/AddRecipiePage/PopularRecipe";
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
