import { useState } from "react";
import  { FilePicker, Form, InputFile, InputText, FieldList, SelectList }  from "./AddRecepieForm.styled";

const AddRecipieForm = () => {
    const CATEGORY = ["Beef", "Breakfast", "Chicken", "Desserts", "Goat", "Lamb", "Miscellaneous", "Pasta", "Pork", "Seafood", "Side"]
    const STEP = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100, 105, 110, 115, 120, 125, 130, 135, 140]

   return (<>
        <h1>Add recipe</h1>
        <Form>
        <FilePicker onClick={() => document.querySelector('.input-file').click()}>
        <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M56.381 22.8571V13.696C56.3811 12.0826 55.7414 10.535 54.6023 9.39244C53.4631 8.24988 51.9175 7.60557 50.3041 7.60073L41.143 7.5733M56.381 41.1428V50.2857C56.381 51.9022 55.7389 53.4526 54.5958 54.5957C53.4527 55.7387 51.9024 56.3809 50.2858 56.3809H41.143M22.8572 7.5733L13.6961 7.60378C12.0827 7.60862 10.5371 8.25293 9.39792 9.39549C8.2588 10.538 7.61913 12.0856 7.61914 13.699V22.8571M22.8572 56.3809H13.7144C12.0978 56.3809 10.5475 55.7387 9.40439 54.5957C8.26132 53.4526 7.61914 51.9022 7.61914 50.2857V41.1428" stroke="#FAFAFA" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M32 37.5C33.25 37.5 34.3127 37.0627 35.188 36.188C36.0627 35.3127 36.5 34.25 36.5 33C36.5 31.75 36.0627 30.6873 35.188 29.812C34.3127 28.9373 33.25 28.5 32 28.5C30.75 28.5 29.6873 28.9373 28.812 29.812C27.9373 30.6873 27.5 31.75 27.5 33C27.5 34.25 27.9373 35.3127 28.812 36.188C29.6873 37.0627 30.75 37.5 32 37.5ZM24 41C23.45 41 22.9793 40.8043 22.588 40.413C22.196 40.021 22 39.55 22 39V27C22 26.45 22.196 25.9793 22.588 25.588C22.9793 25.196 23.45 25 24 25H27.15L29 23H35L36.85 25H40C40.55 25 41.021 25.196 41.413 25.588C41.8043 25.9793 42 26.45 42 27V39C42 39.55 41.8043 40.021 41.413 40.413C41.021 40.8043 40.55 41 40 41H24Z" fill="#FAFAFA"/>
</svg>
        <InputFile type="file" className="input-file"  accept="image/*"/></FilePicker>
        <FieldList>
            <InputText type="text" placeholder="Enter item title" />
            <InputText type="text" placeholder="Enter about recipe" />
            <div><InputText type="text" placeholder="Category" />
            <SelectList>{CATEGORY.map((item) => <option key={item} value={item}>{item}</option>)}</SelectList>
            </div>
            <div>
            <InputText type="text" placeholder="Coocking time" />
            <SelectList>{STEP.map((item) => <option key={item} value={item}>{item + " min"}</option>)}</SelectList>
            </div>          
            </FieldList>
        </Form></>
    )
}

export default AddRecipieForm