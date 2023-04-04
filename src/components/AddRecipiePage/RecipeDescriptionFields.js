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

const RecipeDescriptionFields = ({ onChange }) => {
const [image, setImage] = useState(null)

const categorys = CATEGORY.map((category) =>({value: category, label: category}))
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
          <InputFile type="file" className="input-file" accept="image/*" onChange={handleUploadClick}/>
        </FilePicker>
        <FieldList>
        
          <InputText type="text" onChange={handleValueSet} placeholder="Enter item title" id="title" />
          <InputText type="text" onChange={handleValueSet} placeholder="Enter about recipe" id="about" />
          <Row>
            <InputText disabled={true} type="text" placeholder="Category" />
            <CustomSelect  onChange={handleValueSelectCategory} defaultValue={categorys[0]} classNamePrefix="react-select" options={categorys} id="category" />
          </Row>
          <Row>
            <InputText disabled={true} type="text" placeholder="Coocking time"  />
            <CustomSelect onChange={handleValueSelectTime} defaultValue={step[0]} classNamePrefix="react-select" options={step} id="time"/>
          </Row>
        </FieldList>
      </Desc>
        );
};

export default RecipeDescriptionFields;
