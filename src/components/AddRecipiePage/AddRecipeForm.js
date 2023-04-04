import { useState } from "react";
import RecipeDescriptionFields from "./RecipeDescriptionFields";
import RecipeIngridientsFields from "./RecipeIngridientsFields";
import RecipePreparationFields from "./RecipePreparationFields";
import { Form, Button } from "./AddRecipeForm.styled";
import Notiflix from 'notiflix';



const AddRecipieForm = () => {
const [image, setImage] = useState(null);
const [title, setTitle] = useState(null);
const [description, setDescription] = useState(null);
const [category, setCategory] = useState(null);
const [time, setTime] = useState(null);
const [instructions, setInstructions] = useState(null)
const [ingridients, setIngridients] = useState([])

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
else if(part.ingridients){
let key = Object.keys(part.ingridients[Object.keys(part.ingridients)])
let value = part.ingridients[Object.keys(part.ingridients)][Object.keys(part.ingridients[Object.keys(part.ingridients)])]
let index = Object.keys(part.ingridients)
setIngridients((ingridients) => ({...ingridients, [index]: { ...ingridients[index],  [key] :value}}))
}
}

function addRecipe(e) {
    e.preventDefault()
     if(image){
   data.append("imageUrl", image)
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

if(ingridients){
  data.append("ingridients", ingridients)  
}
else return Notiflix.Notify.warning('Ingridients field is empty');

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