import { Title, Textarea } from "./RecipePreparation.styled"

const RecipePreparationFields = ( {onChange} ) => {
    const handleValueSetInstructions = (e) => {
        console.log(e.currentTarget.value)
        onChange({instructions: e.currentTarget.value})

    }

return(<>
    <Title>Recipe Preparation</Title>
    <Textarea onChange={handleValueSetInstructions} placeholder="Enter recipe"></Textarea>
    </>
)
}

export default RecipePreparationFields