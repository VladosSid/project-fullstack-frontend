import { useState } from "react";
import RecipeDescriptionFields from "./RecipeDescriptionFields";
import RecipeIngridientsFields from "./RecipeIngridientsFields";
import RecipePreparationFields from "./RecipePreparationFields";
import { Form, Button } from "./AddRecipeForm.styled";


const AddRecipieForm = () => {
const [recipe, setRecipe] = useState([])

function addRecipe(e) {
    e.preventDefault()
    setRecipe(e.currentTarget.value)
    
    console.log(recipe)
}

return(<>
  <Form onSubmit={addRecipe}>
    <RecipeDescriptionFields />
    <RecipeIngridientsFields />
    <RecipePreparationFields />
    <Button type="submit">Add</Button>
  </Form></>
)

}

export default AddRecipieForm