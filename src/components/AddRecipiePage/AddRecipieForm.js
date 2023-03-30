import {useState} from "react";
import { filePicker } from "./AddRecepieForm.styled";

const AddRecipieForm = () => {

    return (<>
        <h1>Add recipe</h1>
        <form>
            <filePicker />
            <input type="text" placeholder="Enter item title" />
            <input type="text" placeholder="Enter about recipe" />
            <input type="text" placeholder="Category" />
            <input type="text" placeholder="Coocking time" />
        </form></>
    )
}

export default AddRecipieForm