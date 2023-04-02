import {
  FilePicker,
  InputFile,
  InputText,
  FieldList,
  Row,
  Desc,
  CustomSelect,
} from './RecipeDescriptionFields.styled';

const RecipeDescriptionFields = () => {
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

  const category = CATEGORY.map((category) =>({value: category, label: category}))
  const step = STEP.map((step) =>({value: step, label: step}))

  return (
    <>
      <Desc>
        <FilePicker
          onClick={() => document.querySelector('.input-file').click()}
        >
          <div></div>
          <InputFile type="file" className="input-file" accept="image/*" />
        </FilePicker>
        <FieldList>
          <InputText type="text" placeholder="Enter item title" />
          <InputText type="text" placeholder="Enter about recipe" />
          <Row>
            <InputText disabled={true} type="text" placeholder="Category" id="category"/>
            <CustomSelect defaultValue={category[0]} classNamePrefix="react-select" options={category} />
          </Row>
          <Row>
            <InputText disabled={true} type="text" placeholder="Coocking time" />
            <CustomSelect defaultValue={step[0]} classNamePrefix="react-select" options={step} />
          </Row>
        </FieldList>
      </Desc>
    </>
  );
};

export default RecipeDescriptionFields;
