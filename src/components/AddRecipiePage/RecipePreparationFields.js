import { Title, Textarea } from "./RecipePreparation.styled"



const RecipePreparationFields = ( {onChange} ) => {
    const handleValueSetInstructions = (e) => {
            let value = e.currentTarget.value
            let format = value.split(/\r|\n/);
        onChange({instructions: value})
    }

return(<>
    <Title>Recipe Preparation</Title>
    <Textarea onChange={handleValueSetInstructions} placeholder="Enter recipe"></Textarea>
    </>
)
}

export default RecipePreparationFields