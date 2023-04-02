import { useState } from 'react';
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

const CATEGORY = [
    'Beef',
    'Breakfast',
    'Chicken',
    'Desserts',
    'Goat',
    'Lamb',
    'Miscellaneous',
    'Pasta',
    'Pork',
    'Seafood',
    'Side',
  ];
  const STEP = [
    5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95,
    100, 105, 110, 115, 120, 125, 130, 135, 140,
  ];

const RecipeDescriptionFields = () => {
const [image, setImage] = useState(null)
const [title, setTitle] = useState("")
const [about, setAbout] = useState("")
const [category, setCategory] = useState("")
const [time, setTime] = useState("")

console.log(title, about, category, time)

const categorys = CATEGORY.map((category) =>({value: category, label: category}))
  const step = STEP.map((step) =>({value: step, label: step}))

const handleValueSet = (e) => {
  console.log(e.currentTarget.id)
  console.log(e.currentTarget.value)
  // eslint-disable-next-line default-case
  switch (e.currentTarget.id) {
      case 'title':
        setTitle(e.currentTarget.value)
        break;
      case 'about':
       setAbout(e.currentTarget.value)
       break;
       case 'category':
       setCategory(e.currentTarget.value)
       break;
       case 'time':
       setTime(e.currentTarget.value)
       break;
  };
}


const handleUploadClick = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    if (file) {
      reader.readAsDataURL(file);
      reader.onloadend = function (e) {
        setImage(reader.result);
      };
    }
  };




  return (
      <Desc>
        <FilePicker 
          onClick={() => document.querySelector('.input-file').click()}
        >
          <div>{image && <Photo src={image} alt="photo"/>}</div>
          <InputFile type="file" className="input-file" accept="image/*" onChange={handleUploadClick}/>
        </FilePicker>
        <FieldList>
        
          <InputText type="text" onChange={handleValueSet} placeholder="Enter item title" id="title" />
          <InputText type="text" onChange={handleValueSet} placeholder="Enter about recipe" id="about" />
          <Row>
            <InputText disabled={true} type="text" placeholder="Category" />
            <CustomSelect onChange={handleValueSet} defaultValue={categorys[0]} classNamePrefix="react-select" options={categorys} id="category" />
          </Row>
          <Row>
            <InputText disabled={true} type="text" placeholder="Coocking time"  />
            <CustomSelect defaultValue={step[0]} classNamePrefix="react-select" options={step} id="time"/>
          </Row>
        </FieldList>
      </Desc>
        );
};

export default RecipeDescriptionFields;
