import  { FilePicker, InputFile, InputText, FieldList, SelectList, Row, Desc }  from "./RecipeDescriptionFields.styled";

const RecipeDescriptionFields = () => {
    const CATEGORY = ["Beef", "Breakfast", "Chicken", "Desserts", "Goat", "Lamb", "Miscellaneous", "Pasta", "Pork", "Seafood", "Side"]
    const STEP = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100, 105, 110, 115, 120, 125, 130, 135, 140]

   return (<>
        <Desc>
        <FilePicker onClick={() => document.querySelector('.input-file').click()}>
        <div></div>
        <InputFile type="file" className="input-file"  accept="image/*"/></FilePicker>
        <FieldList>
            <InputText type="text" placeholder="Enter item title" />
            <InputText type="text" placeholder="Enter about recipe" />
            <Row><InputText type="text" placeholder="Category" />
            <SelectList>{CATEGORY.map((item) => <option key={item} value={item}>{item}</option>)}</SelectList>
            </Row>
            <Row>
            <InputText type="text" placeholder="Coocking time" />
            <SelectList>{STEP.map((item) => <option key={item} value={item}>{item + " min"}</option>)}</SelectList>
            </Row>          
            </FieldList></Desc>
        </>
    )
}

export default RecipeDescriptionFields