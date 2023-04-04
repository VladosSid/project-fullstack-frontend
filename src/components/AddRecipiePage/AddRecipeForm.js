import { useState } from "react";
import RecipeDescriptionFields from "./RecipeDescriptionFields";
import RecipeIngridientsFields from "./RecipeIngridientsFields";
import RecipePreparationFields from "./RecipePreparationFields";
import { Form, Button } from "./AddRecipeForm.styled";
import Notiflix from 'notiflix';
import { useNavigate } from "react-router-dom";

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDJjMTkzOWQ5ODJjZGYxMzgyZWJjMGIiLCJpYXQiOjE2ODA2MTE3MzR9.UK08GzOiR_baNXXDxRt9phx-vk8usXNueLMdIjhNjTY"

const AddRecipieForm = () => {
const navigate = useNavigate();
const [image, setImage] = useState(null);
const [title, setTitle] = useState(null);
const [description, setDescription] = useState(null);
const [category, setCategory] = useState(null);
const [time, setTime] = useState(null);
const [instructions, setInstructions] = useState(null)
const [ingredients, setIngredients] = useState([])

const data = new FormData();

const handlReceptChange = (part) => {
  
 if(part.img){
  setImage(part.img)
}
else if(part.title){
  setTitle(part.title)
}
else if(part.description){
  setDescription(part.description)
}
else if(part.category){
  setCategory(part.category)
}
else if(part.time){
  setTime(part.time)
}
else if(part.instructions){
  setInstructions(part.instructions)
}
else if(part.ingredients){
let key = Object.keys(part.ingredients[Object.keys(part.ingredients)])
let value = part.ingredients[Object.keys(part.ingredients)][Object.keys(part.ingredients[Object.keys(part.ingredients)])]
let index = Object.keys(part.ingredients)
setIngredients((ingredients) => ({...ingredients, [index]: { ...ingredients[index],  [key] :value}}))
}
}

async function addRecipe(e) {
    e.preventDefault()
     if(image){
   data.append("img", image)
  }
  else return Notiflix.Notify.warning('Image field is empty');
  if(title){
    data.append("title", title) 
  }
  else return Notiflix.Notify.warning('Title field is empty');
  if(description){
    data.append("description", description)  
  }
  else return Notiflix.Notify.warning('Description field is empty');
  if(category){
    data.append("category", category)  
  }
  else return Notiflix.Notify.warning('Category field is empty');
  if(time){
    data.append("time", time)  
  }
  else return Notiflix.Notify.warning('Time field is empty');
  if(instructions){
    data.append("instructions", instructions)  
  }
  else return Notiflix.Notify.warning('Instructions field is empty');

if(ingredients){
  const {id, measure} = ingredients
  data.append("ingredients[0][id]", ingredients[0][id])  
  data.append("ingredients[0][measure]", ingredients[0][measure])  

}
else return Notiflix.Notify.warning('Іngredients field is empty');

if (data)
{await fetch('http://localhost:3001/api/ownRecipes', {
 headers: {
        Authorization: `Bearer ${token}`,  
      },
  method: 'POST',
  body: data
})
.then(res =>  {navigate('/my')})
.catch(err => {
  Notiflix.Notify.warning(err)
})
}
}

return(<>
  <Form>
    <RecipeDescriptionFields onChange={handlReceptChange}/>
    <RecipeIngridientsFields onChange={handlReceptChange}/>
    <RecipePreparationFields onChange={handlReceptChange} />
    <Button id="send" onClick={addRecipe}>Add</Button>
  </Form></>
)

}

export default AddRecipieForm