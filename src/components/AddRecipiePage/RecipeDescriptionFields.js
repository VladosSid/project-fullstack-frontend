/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react';
import { queryBackEnd } from 'helpers/request';
import {
  FilePicker,
  InputFile,
  InputText,
  FieldList,
  Row,
  Desc,
  CustomSelect,
  Photo
} from './RecipeDescriptionFields.styled';

  const STEP = [
    5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95,
    100, 105, 110, 115, 120, 125, 130, 135, 140,
  ];

const RecipeDescriptionFields = ({ onChange }) => {
const [image, setImage] = useState(null)
const [category, setCategory] = useState([])

//const category = queryBackEnd.queryCategoryList()
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDJkZTYwYmNlOTJjN2E5ZGIzOTUyODMiLCJpYXQiOjE2ODA3Mjk5MzB9.4w24PlEZHdCxWxGnub0Er6GjaEog_6NUtHaPm-CbxN0"

useEffect(() => {
    async function fetchCategory() {
      let response = await fetch('https://backend-soyummy.onrender.com/api/recipes/category-list', {
        headers: {
        Authorization: `Bearer ${token}`,  
      },
      method: 'GET',
      })
      response = await response.json()
      setCategory(response.result.data)
      
    }

    fetchCategory()
  }, [])


const categorys = category.map((category) =>({value: category, label: category}))
  const step = STEP.map((step) =>({value: step, label: step}))

  const handleValueSelectCategory = (e) => {
    onChange({category: e.value})
}

  const handleValueSelectTime = (e) => {
    onChange({time: e.value})

  }

  const handleValueSet = (e) => {
  // eslint-disable-next-line default-case
  switch (e.currentTarget.id) {
      case 'title':
        onChange({title: e.currentTarget.value})
        break;
      case 'about':
        onChange({description: e.currentTarget.value})
  };
}


const handleUploadClick = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    if (file) {
      reader.readAsDataURL(file);
      reader.onloadend = function (e) {
        setImage(reader.result);
        onChange({img: event.target.files[0]})
      };
    }
  };




  return (
      <Desc>
        <FilePicker 
          onClick={() => document.querySelector('.input-file').click()}
        >
          <div>{image && <Photo src={image} alt="photo"/>}</div>
          <InputFile required={true} type="file" className="input-file" accept="image/*" onChange={handleUploadClick}/>
        </FilePicker>
        <FieldList>
        
          <InputText required={true} type="text" onChange={handleValueSet} placeholder="Enter item title" id="title" />
          <InputText required={true} type="text" onChange={handleValueSet} placeholder="Enter about recipe" id="about" />
          <Row>
            <InputText disabled={true} type="text" placeholder="Category" />
            <CustomSelect required={true} onChange={handleValueSelectCategory} defaultValue={categorys[0]} classNamePrefix="react-select" options={categorys} id="category" />
          </Row>
          <Row>
            <InputText disabled={true} type="text" placeholder="Coocking time"  />
            <CustomSelect required={true} onChange={handleValueSelectTime} defaultValue={step[0]} classNamePrefix="react-select" options={step} id="time"/>
          </Row>
        </FieldList>
      </Desc>
        );
};

export default RecipeDescriptionFields;
