import AddRecipieForm from "./AddRecipieForm";
import RecipeIngridientsFields from "./RecipeIngridientsFields";
import RecipePreparation from "./ResipiePreparationFields";
import { Wrap } from "./AddResipiePage.styled"

const AddRecipiePage = () => {
    return(
    <Wrap>
  <AddRecipieForm />
<RecipeIngridientsFields />
<RecipePreparation />  
</Wrap>
)

}

export default AddRecipiePage
